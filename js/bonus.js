// Our Team BONUS

// membri del team
const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },
];

const teamMembersDOMElement = document.getElementById('team-members')

for (i = 0; i < teamMembers.length; i++){

    const currentMember = teamMembers[i];

    teamMembersDOMElement.innerHTML += `<div class="member">
            <div class="member__nome">${currentMember.nome}</div>
            <div class="member__ruolo">${currentMember.ruolo}</div>
            <img src="./img/${currentMember.foto}">
        </div>`;

    // teamMembersDOMElement.innerHTML += '<div>' + i + '</div>';
    // teamMembersDOMElement.innerHTML += '<div>' + currentMember.nome + '</div>';
    // teamMembersDOMElement.innerHTML += '<div>' + currentMember.ruolo + '</div>';
    // teamMembersDOMElement.innerHTML += '<div>' + currentMember.foto + '</div>';
};