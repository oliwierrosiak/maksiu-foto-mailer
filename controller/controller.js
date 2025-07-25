import transporter from "../services/nodemailer.js"

class Controller
{
    async message(req,res)
    {
        console.log(req.body)
        try
        {
            const message = await transporter.sendMail({
                from:"maksiufotomailer@gmail.com",
                to: "oliwierrosiak07@gmail.com", 
                subject: "Nowa Wiadomość",
                text: `Nowa wiadomość od ${req.body.email}: ${req.body.message}`, 
                html: `<b>Nowa wiadomość od ${req.body.email}</b><br><p>${req.body.message}</p>`, 
            })
            setTimeout(() => {
                res.sendStatus(200)
                
            }, 3000);
        }
        catch(ex)
        {
            console.log(ex)
            res.sendStatus(500)
        }
    }

    async calendar(req,res)
    {
        try
        {
            const message = await transporter.sendMail({
                from:"maksiufotomailer@gmail.com",
                to: "oliwierrosiak07@gmail.com", 
                subject: "Nowy Termin Sesji",
                text: `Użytkownik ${req.body.email} wybrał swoją sesję zdjeciową. Kategoria: ${req.body.category}, data: ${req.body.date}`, 
                html: `<p>Użytkownik ${req.body.email} wybrał swoją sesję zdjeciową. Kategoria: ${req.body.category}, data: ${req.body.date}</p>`, 
            })
            setTimeout(() => {
                res.sendStatus(200)
                
            }, 3000);
        }
        catch(ex)
        {
            res.sendStatus(500)
        }
       
    }
}

export default new Controller