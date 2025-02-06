export default async (request, context) => {
    const country = context.geo?.country?.code || "US"; // Rileva il paese
    const cookies = request.headers.get("cookie") || "";
    
    // Se l'utente ha già scelto una lingua, non lo reindirizziamo di nuovo
    const match = cookies.match(/lang=([a-z]{2})/);
    if (match) {
        return new Response(null, { status: 200 });
    }

    let redirectUrl = "/en/"; // Default English

    if (country === "IT") redirectUrl = "/it/";
    if (country === "ES") redirectUrl = "/es/";

    return Response.redirect(new URL(redirectUrl, request.url), 302);
};
