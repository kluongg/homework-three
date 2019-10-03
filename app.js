const org1_depts = [
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children: [] },
            {name: 'accounting receivable', children: [] },
        ],
    },
    {
        name: 'finance',
        children: [],
    },
]

const org2_depts = [
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children: [] },
            {name: 'accounting receivable', 
            children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
         },
        ],
    },
    {
        name: 'finance',
        children: [{name: 'investment', children: [] }],
    },
]

const start_tag = '<ol>'
const end_tag = '</ol>'
const start_li = '<li>'
const end_li = '</li>'

var output = start_tag

for (let i=0, i<org1_depts.length; i++) {
    output+= start_li + org1_depts+ end_li
}

output += end_li
output += end_tag

const outputDiv = document.getElementById('output')
outputDiv.innerHTML = output

