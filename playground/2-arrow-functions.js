const event = {
    name: 'Fiesta',
    guestList: ['Gus', 'Mike', 'Caro'],
    printGuestList() {
        console.log('Lista de ' + this.name)
        this.guestList.forEach((invitado) => console.log(invitado + ' is attending ' + this.name))
    }
}

event.printGuestList();