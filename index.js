function addborder(options) {
    let elements=document.querySelector('custom-bdr');

    elements.forEach(element => {
        element.style.border=`{options}px solid #e2e2e2`;
    });
}



module.exports.addborder=addborder;