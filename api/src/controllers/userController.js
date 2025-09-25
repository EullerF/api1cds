let users = [];

module.exports = class userController {
  static async createUser(req, res) {
    const { cpf, email, password, name } = req.body;
    if (!cpf || !email || !password || !name) {
      return res
        .status(400)
        .json({ error: "Todos os campos devem ser preenchidos" });
    }
    const existingUser = users.find((user) => user.cpf === cpf);
    if (existingUser) {
      return res.status(400).json({ error: "CPF já cadastrado" });
    }
    const newUser = { cpf, email, password, name };
    users.push(newUser);
    return res
      .status(201)
      .json({ message: "Usuário cadastrado", user: newUser });
  }
  static async readUsers(req, res) {
    return res
      .status(200)
      .json({ message: "Aqui estão os usuários", users: users });
  }

  static async updateUser(req, res) {
    const { cpf, email, password, name } = req.body;
    if (!cpf || !email || !password || !name) {
      return res
        .status(400)
        .json({ error: "Todos os campos devem ser preenchidos" });
    }
    // Procura o indice do Array que atende a condição
    const userIndex = users.findIndex((user) => user.cpf === cpf);

    // Se o usuário não for encontrado o findIndex retorna (-1)
    if (userIndex === -1) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    users[userIndex] = { cpf, name, password, email };

    return res
      .status(200)
      .json({ message: "O usuário foi atualizado", user: users[userIndex] });
  }

  static async deleteUser(req, res) {
    const identificadorUsuario = req.params.cpf

    // Procura o indice do usuário no array 'users' pelo cpf
    const userIndex = users.findIndex(
      (user) => user.cpf === identificadorUsuario
    );
    // Se o usuário não for encontrado (userIndex será -1), retorna uma resposta de erro
    if (userIndex === -1){
      return res.status(404).json({error: "Usuário não encontrado"})
    }

    //Remove o usuário do array 'users' usando a funcionalidade splice, que deleta o item no indice encontrado
    users.splice(userIndex,1);

    // Retorna 200, informando que o usuário foi deletado
    return res.status(200).json({message:"Usuário excluído com sucesso"});
  }
};
