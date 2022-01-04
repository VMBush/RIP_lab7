export class StockCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        let status
        if (data.is_growing)
            status = 'growing'
        else
            status = 'not growing'

        let date = new Date(Date.parse(data.date_modified))
        date = date.toISOString().substr(0,19).replace('T', ' ')
        return (
            `
                <div class="card" style="width: 300px;">
                    <p>UPD: ${date}</p>
                    <div class="card-body">
                        <h5 class="card-title">${data.company_name}</h5>
                        <p class="card-text"><strong>Price: ${data.price}</strong></p>
                        <p class="card-text">Status: ${status}</p>
                        <button class="btn btn-primary" id="click-card-${data.pk}" data-id="${data.pk}">Info</button>
                    </div>
                </div>
            `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.pk}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}