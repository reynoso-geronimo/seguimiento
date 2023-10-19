const db = require("../database/models")

module.exports = {
    index: async (req, res) => {
        const tickets= await db.Tickets.findAll({include:[{association:'Concesionarios'}]})
        console.log(tickets)
        return res.render("index", { tickets: tickets })

    },
    history: async (req, res) => {
        const ticketsBorrados = await db.Tickets.findAll({
            paranoid: false,
            where: { deletedAt: { [db.Sequelize.Op.ne]: null } } 
        });
        return res.render("history", { tickets: ticketsBorrados })
    },
    new: (req, res) => {
        return res.render("new")
    },
    agregar: async (req, res) => {

        try {
            await db.Tickets.create(req.body)
            return res.redirect("/")
        } catch (error) {

        }
    },
    editarForm: async (req, res) => {
        try {

            const ticket = await db.Tickets.findByPk(req.params.ticket)

            return res.render("editar", { ticket: ticket })
        } catch (error) {
            console.log(error);
        }
    },
    editar: async (req, res) => {
        try {
            await db.Tickets.update({ ...req.body }, { where: { id: req.params.ticket } })
        } catch (error) {
            console.log(error);
        }
        return res.redirect("/")
    },


    eliminar: async (req, res) => {
        try {
            await db.Tickets.destroy({ where: { id: req.params.ticket } })
        } catch (error) {
            console.log(error);
        }
        return res.redirect("/")
    },
    restore: async (req, res) => {
        try {
            await db.Tickets.restore({ where: { id: req.params.ticket } })
        } catch (error) {
            console.log(error);
        }
        return res.redirect("/")
    },


}