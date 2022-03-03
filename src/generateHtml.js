function generateHtml(teamMembers) {
  const htmlString = teamMembers.reduce((string, employee) => {
    return string + `\t<li> job role: ${employee.getRole()}\n name: ${employee.getName()}\n ID: ${employee.getId()}\n email: ${employee.getEmail()}\n ${employee.render()}</li>\n`;
  }, '\n');

  const list = renderList(htmlString);

  console.log(list);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  </head>
  <body>
  ${list}
  </body>
  </html>`;
}
const renderList = (list) => `<ul>${list}</ul>`;

module.exports = generateHtml;
