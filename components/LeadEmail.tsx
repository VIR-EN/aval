import * as React from "react";

type LeadEmailProps = {
    name: string;
    company?: string;
    contact: string;
    category?: string;
    message: string;
};

export function LeadEmail({ name, company, contact, category, message }: LeadEmailProps) {
    return (
        <div style={{ fontFamily: "ui-sans-serif, system-ui", lineHeight: 1.5 }}>
            <h2 style={{ margin: "0 0 12px" }}>New website inquiry</h2>

            <p style={{ margin: "0 0 6px" }}>
                <strong>Name:</strong> {name}
            </p>

            <p style={{ margin: "0 0 6px" }}>
                <strong>Brand / Company:</strong> {company || "-"}
            </p>

            <p style={{ margin: "0 0 6px" }}>
                <strong>Email / WhatsApp:</strong> {contact}
            </p>

            <p style={{ margin: "0 0 6px" }}>
                <strong>Category:</strong> {category || "-"}
            </p>

            <hr style={{ margin: "14px 0", border: "none", borderTop: "1px solid #e5e7eb" }} />

            <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                <strong>Message:</strong>
                <br />
                {message}
            </p>
        </div>
    );
}
