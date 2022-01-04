export class StockComponent {
    constructor(parent) {
        this.parent = parent
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
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h4 class="card-title">${data.company_name}</h4>
                                <p class="card-text"><strong>Price: ${data.price}</strong></p>
                                <p class="card-text">Status: ${status}</p>
                                <p>Last updated: ${date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}