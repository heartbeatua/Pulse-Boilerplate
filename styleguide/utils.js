const unhyphenate = str => str.replace(/(\w)(-)(\w)/g, '$1 $3');
const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1);
const formatPageName = str => upperFirst(unhyphenate(str));

export { formatPageName };
