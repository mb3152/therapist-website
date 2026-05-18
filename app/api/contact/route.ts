import { Resend } from "resend";

const TO_EMAIL = "rachelzagtherapy@icloud.com";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  website?: unknown;
};

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  return new Resend(apiKey);
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = asString(payload.name);
  const email = asString(payload.email);
  const phone = asString(payload.phone);
  const message = asString(payload.message);
  const website = asString(payload.website);

  if (website) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please include your name, email, and message." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const fromEmail = process.env.CONTACT_EMAIL_FROM;

  if (!fromEmail) {
    return Response.json(
      { error: "CONTACT_EMAIL_FROM is not configured." },
      { status: 500 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const { error } = await getResend().emails.send({
      from: fromEmail,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New therapy inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #2d2d2d; line-height: 1.6;">
          <h1 style="font-size: 20px;">New website inquiry</h1>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
      text: [
        "New website inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      return Response.json(
        { error: "The message could not be sent. Please try again later." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "The message could not be sent. Please try again later." },
      { status: 502 }
    );
  }
}
