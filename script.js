
const fieldsContainer = document.getElementById("fields-container");
const addFieldButton = document.getElementById("add-field-button");
const addSingleNumberButton = document.getElementById("add-single-number-button");

let fieldCount = 0;
let singleNumberCount = 0;

// Regex pour valider les numéros
const numberRegex = /^(0[1-5]|09)\d{8}$/;

// Ajouter un groupe de champs "Début" et "Fin"
addFieldButton.addEventListener("click", () => {
    fieldCount++;

    const newFieldGroup = document.createElement("div");
    newFieldGroup.className = "field-group";

    newFieldGroup.innerHTML = `
        <label for="debut-${fieldCount}">Début de tranche:</label>
        <input type="text" id="debut-${fieldCount}" name="debut[]" placeholder="Début">
        <label for="fin-${fieldCount}">Fin de tranche:</label>
        <input type="text" id="fin-${fieldCount}" name="fin[]" placeholder="Fin">
        <p class="error-message" id="error-${fieldCount}">Numéro invalide. Format attendu: 01/02/03/04/05/09 suivi de 8 chiffres.</p>
    `;

    fieldsContainer.appendChild(newFieldGroup);

    // Ajouter la validation
    const debutInput = document.getElementById(`debut-${fieldCount}`);
    const finInput = document.getElementById(`fin-${fieldCount}`);
    const errorMessage = document.getElementById(`error-${fieldCount}`);

    [debutInput, finInput].forEach(input => {
        input.addEventListener("input", () => {
            if (numberRegex.test(input.value)) {
                errorMessage.style.display = "none";
            } else {
                errorMessage.style.display = "block";
            }
        });
    });
});

// Ajouter un champ unique "Numéro Seul"
addSingleNumberButton.addEventListener("click", () => {
    singleNumberCount++;

    const newSingleNumberField = document.createElement("div");
    newSingleNumberField.className = "field-group";

    newSingleNumberField.innerHTML = `
        <label for="numero-${singleNumberCount}">Numéro seul:</label>
        <input type="text" id="numero-${singleNumberCount}" name="numero[]" placeholder="Numéro seul">
        <p class="error-message" id="error-single-${singleNumberCount}">Numéro invalide. Format attendu: (0[1-5]|09) suivi de 8 chiffres.</p>
    `;

    fieldsContainer.appendChild(newSingleNumberField);

    // Ajouter la validation
    const numeroInput = document.getElementById(`numero-${singleNumberCount}`);
    const errorMessage = document.getElementById(`error-single-${singleNumberCount}`);

    numeroInput.addEventListener("input", () => {
        if (numberRegex.test(numeroInput.value)) {
            errorMessage.style.display = "none";
        } else {
            errorMessage.style.display = "block";
        }
    });
});