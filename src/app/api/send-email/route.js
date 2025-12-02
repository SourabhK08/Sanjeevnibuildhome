import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

//RESEND_API_KEY=re_KuGoaWva_HyzMML6kKT4z7SZP9Pv9cF2Y

export async function POST(req) {
  try {
    const { name, phone, message } = await req.json();

    await resend.emails.send({
      from: "Website Enquiry <onboarding@resend.dev>",
      to: "telepathy0008@gmail.com",
      subject: "New Enquiry Received",
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
