const openai = require('../config/openai')
const InputPrompt = require('../model/input-model')

module.exports = {
  async sendText(request, response){
    //logica

    const openaiAI = openai.configuration()
    try {
      const response = await openaiAI.createCompletion(

      )
    } catch (error) {
      
    }
    return response.status(200).json({
      menssage:'opa, dev na area'
    })
  }
}