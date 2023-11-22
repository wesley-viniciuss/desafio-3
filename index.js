class Character
{
  constructor(name, age, type) 
  {
    this.name = name
    this.age = age
    this.type = type
    this.ability = this.setAbility()
  }

  setAbility()
  {
    switch(this.type){
      case "guerreiro":
      return "espada"

      case "mago":
        return "magia"

      case "monge":
        return "artes marciais"

      case "ninja":
        return "shuriken"
      
      default:
        return "ataque padrão"
    }
  }


  attack()
  {

    console.log(`${this.type} atacou com ${this.ability} `)
  }
}

the_fool = new Character("the fool", 21, "ninja")
the_fool.attack()


