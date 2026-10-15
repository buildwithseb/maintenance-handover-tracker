
import { TYPE_LABELS, STATUS_LABELS } from "../utils/constants.js";

export default class Ui {

    static getBadgeClassColor(status) {

        if (status === "available" || status === "running" || status === "active")
            return "green";
        if (status === "breakdown" || status === "down" || status === "inactive")
            return "red";
        return "yellow";
    }


    static renderDashboard(machineryList, availableList, breakdownList, inProgressList) {

        const allStatText = document.querySelectorAll(".stats p");
        allStatText[0].textContent = machineryList.length;
        allStatText[1].textContent = availableList.length;
        allStatText[2].textContent = breakdownList.length;
        allStatText[3].textContent = inProgressList.length;
    }

    static editPeriod(startDate, endDate) {
        document.getElementById("display-start-date").textContent = startDate;
        document.getElementById("display-end-date").textContent = endDate;

    }

    static renderGeneralNotes(generalNoteList, generalNoteRootList) {

        generalNoteRootList.replaceChildren();

        for (const note of generalNoteList) {
            const newLi = document.createElement("li");
            newLi.dataset.id = note.id;
            newLi.innerHTML = `
                    <div>
                        <p></p>
                        <button class="small-btn" data-action="edit">Edit</button>
                        <button class="small-btn danger-btn" data-action="remove">Remove</button> 
                    </div>
                    `;
            newLi.querySelector('p').textContent = note.text ?? "";
            generalNoteRootList.appendChild(newLi);
        }

    }

    static renderMachineries(machineryList, machineryRootList) {

        machineryRootList.replaceChildren();

        for (const machine of machineryList) {
            const newMachineryEl = document.createElement('tr');
            newMachineryEl.dataset.id = machine.id;
            newMachineryEl.innerHTML = `
                
                  <td data-field='name'></td>
                  <td data-field='type'></td>
                  <td>
                    <span class="badge" data-field='status'></span>
                  </td>
                  <td data-field='notes'></td>
                  <td>
                     <button class="small-btn" data-action="edit" >Edit</button>
                     <button class="small-btn danger-btn" data-action="remove" >Remove</button>
                  </td>
        `
            newMachineryEl.querySelector("[data-field='name']").textContent = machine.name ?? '';
            newMachineryEl.querySelector("[data-field='type']").textContent = TYPE_LABELS[machine.type] ?? "Unknown";
            const statusBadge = newMachineryEl.querySelector("[data-field='status']");
            statusBadge.textContent = STATUS_LABELS[machine.status] ?? "Unknown";
            statusBadge.classList.add(this.getBadgeClassColor(machine.status));
            newMachineryEl.querySelector("[data-field='notes']").textContent = machine.notes ?? "";

            machineryRootList.appendChild(newMachineryEl);

        }
    }



    static renderTelehut(telehutList, telehutTableBody) {


        telehutTableBody.replaceChildren();

        for (const telehut of telehutList) {
            const newTelehutEl = document.createElement("tr");
            newTelehutEl.dataset.id = telehut.id
            newTelehutEl.innerHTML = `
                  
                    <td data-field='name'></td>
                    <td data-field='location'></td>
                    <td><span class="badge" data-field='status'></span></td>
                    <td>
                     <button class="small-btn" data-action="edit" >Edit</button>
                     <button class="small-btn danger-btn" data-action="remove" >Remove</button>
                    </td>
                    `

            newTelehutEl.querySelector("[data-field='name']").textContent = telehut.name ?? "Unknown";
            newTelehutEl.querySelector("[data-field='location']").textContent = telehut.location ?? "Unknown";
            const statusBadge = newTelehutEl.querySelector("[data-field='status']");
            statusBadge.classList.add(this.getBadgeClassColor(telehut.status));
            statusBadge.textContent = STATUS_LABELS[telehut.status] ?? "Unknown";
            telehutTableBody.appendChild(newTelehutEl);
        }
    }

    static renderRemoteCapableMachinery(remoteCapableMachineryList) {

        const remoteCapableMachineryTableBody = document.getElementById("remote-capable-table-body");
        remoteCapableMachineryTableBody.replaceChildren();

        for (const machine of remoteCapableMachineryList) {
            const newRemoteCapableMachineryEl = document.createElement("tr");
            newRemoteCapableMachineryEl.innerHTML = `
                    <td data-field='name'></td>
                    <td><span class="badge" data-field='status'></span></td>       
            `;

            newRemoteCapableMachineryEl.querySelector("[data-field='name']").textContent = machine.name ?? "Unknown";
            const statusBadge = newRemoteCapableMachineryEl.querySelector("[data-field='status']");
            statusBadge.textContent = STATUS_LABELS[machine.status] ?? "Unknown";
            statusBadge.classList.add(this.getBadgeClassColor(machine.status))
            remoteCapableMachineryTableBody.appendChild(newRemoteCapableMachineryEl);
        }

    }

    static renderRemoteLevels(remoteLevelList, remoteLevelRootList) {

        remoteLevelRootList.replaceChildren();

        for (const level of remoteLevelList) {
            const newLevelElement = document.createElement('tr');
            newLevelElement.dataset.id = level.id
            newLevelElement.innerHTML = `
                  <td data-field='name'></td>
                  <td><span class="badge" data-field='status' ></span></td>
                  <td data-field='notes'></td>
                  <td>
                    <button class="small-btn" data-action="edit">Edit</button>
                    <button class="small-btn danger-btn" data-action="remove" >Remove</button>
                  </td>
            `
            newLevelElement.querySelector("[data-field='name']").textContent = level.location ?? "Unknown";
            const statusBadge = newLevelElement.querySelector("[data-field='status']");
            statusBadge.classList.add(this.getBadgeClassColor(level.status))
            statusBadge.textContent = STATUS_LABELS[level.status] ?? "Unknown";
            newLevelElement.querySelector("[data-field='notes']").textContent = level.notes ?? "";

            remoteLevelRootList.appendChild(newLevelElement);
        }


    }

    static renderHandoverGeneralNote(generalNoteList) {

        const handoverUl = document.getElementById('handover-general-notes-list');
        handoverUl.replaceChildren();

        for (const note of generalNoteList) {
            const newNote = document.createElement('li');
            newNote.textContent = note.text;
            handoverUl.appendChild(newNote);
        }
    }

    static renderHandover(handoverList) {

        const handoverTableBody = document.getElementById("handover-table-body");
        handoverTableBody.replaceChildren();



        for (const handover of handoverList) {
            const newHandoverLog = document.createElement('tr');
            newHandoverLog.innerHTML = `
                  <td data-field='equipment'></td>
                  <td><span class="badge" data-field='status'></span></td>
                  <td data-field='notes'></td>
                  `
            newHandoverLog.querySelector("[data-field='equipment']").textContent = handover.location || handover.name || "Unknown";
            const statusBadge = newHandoverLog.querySelector("[data-field='status']");
            statusBadge.classList.add(this.getBadgeClassColor(handover.status));
            statusBadge.textContent = STATUS_LABELS[handover.status] ?? "Unknown";
            newHandoverLog.querySelector("[data-field='notes']").textContent = handover.notes ?? "";


            handoverTableBody.appendChild(newHandoverLog);
        }
    }

    static openForm(formElement, openFrombtn) {
        formElement.classList.remove('inactive');
        openFrombtn.classList.add("inactive");

    }

    static closeForm(formElement, btnElement) {
        formElement.classList.add('inactive');
        btnElement.classList.remove("inactive");
        if (formElement.tagName === "FORM") {
            formElement.reset();
        }

    }

    static showPage(elementId) {

        const pages = document.querySelectorAll(".page-section");
        pages.forEach(page => {
            page.classList.remove("active")
        });
        document.getElementById(elementId).classList.add("active");
    }


    //LOADING METHODS
    static showLoading() {
        const loading = document.getElementById("loading-state");
        if (loading) {
            loading.classList.remove("inactive");
        };
    }

    static hideLoading() {
        const loading = document.getElementById("loading-state");
        if (loading) loading.classList.add("inactive");
    }

    static showButton(buttonId) {
        const button = document.getElementById(`${buttonId}`)
        button.classList.remove("inactive");
    }

}


