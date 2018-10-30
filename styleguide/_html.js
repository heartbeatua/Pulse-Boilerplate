module.exports = ({ html = '', scripts, css, static: staticBuild }) =>
  `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Pulse Guide</title>
  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700" rel="stylesheet">
  ${css ? css.replace(/url\(img/gi, 'url(/img') : ''}
</head>
<body>
  <div id="root">${html
    .replace(/src="img/gi, 'src="/img')
    .replace(/url\(img/gi, 'url(/img')}</div>
  ${staticBuild ? '' : scripts}
</body>
</html>
`;
