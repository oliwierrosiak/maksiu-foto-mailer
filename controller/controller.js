import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

class Controller
{
    async message(req,res)
    {
        try
        {

            const data = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'maxbookowski@gmail.com',
                subject: 'Nowa Wiadomość!',
                html: `<b>Nowa wiadomość od ${req.body.email}</b><br><p>${req.body.message}</p>`
            });
            res.sendStatus(200)
        }
        catch(ex)
        {
            res.sendStatus(500)
        }
    }

    async calendar(req,res)
    {
        try
        {
            const data = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'maxbookowski@gmail.com',
                subject: 'Nowy Termin Sesji',
                html: `<p>Użytkownik ${req.body.email} wybrał swoją sesję zdjeciową. Kategoria: ${req.body.category}, data: ${req.body.date}</p>`
            });
            res.sendStatus(200)
        }
        catch(ex)
        {
            res.sendStatus(500)
        }
       
    }
}

export default new Controller