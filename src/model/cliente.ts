export default class ClienteModel {
    #id: number
    #nome: string
    #image: object

    constructor(id: number, nome: string, image: object) {
        this.#id = id
        this.#nome = nome
        this.#image = image
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get image() {
        return this.#image
    }
}