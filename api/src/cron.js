const cron = require("node-cron")
const cleanUpEvents = require("./services/cleanUpEventsService")

// Agendando uma ação
cron.schedule("0 0 * * *", async()=>{
    try {
        await cleanUpEvents();
    } catch (error) {
        console.error("Erro ao executar a Limpeza automática", error);
    }
})