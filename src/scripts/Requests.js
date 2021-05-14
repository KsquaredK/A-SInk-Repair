import { getRequests } from "./dataAccess.js"

export const Requests = () => {
        const requests = getRequests()

        let html = "<ul>"
        const requestHTMLString = requests.map(
                (convertRequestToListItem) => {
                    return `<li> ${request.description}
            }
            }
        </ul>
    `

                    return html
                }

                /*
                Tom Clouse's code:
                export const Requests = () => {
                    const requests = getRequests()
                    const plumbers = getPlumbers()

                    let html = "<ul>"
                    const requestStuff = requests.map(
                        (request) => {
                            return `<li> ${request.description}
                            <select class="plumbers" id="plumbers">
                            <option value="">Choose</option>
                            ${
                                plumbers.map(
                                (plumber) => {
                                    return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                                }).join("")
                            }
                                </select>
                            <button class="request__delete" id = "request--${request.id}"> Delete</button >
                        </li> `
                        }
                    )

                    html += requestStuff.join("")
                    html += "</ul>"    
                    return html
    }