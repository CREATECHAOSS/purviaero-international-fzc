const fs = require('fs');
const content = fs.readFileSync('public/new/Purvi International with Slogan.svg', 'utf8');

const brands = [
  '#0071CE', '#00999F', '#0170D2', '#0274D6', '#029AA7', 
  '#EFF9FD', '#EFF2F6', '#F0F9FD', '#FAFBFC', '#F6F7F9', 
  '#F7F9FA', '#F6F7FA', '#F7F8FA', '#F8F9FB', '#FAFBFC', 
  '#EFF1F6', '#F1F3F7', '#EFF2F6', '#EFF1F6', '#F2F4F8', 
  '#CBD4E3', '#D8E0EA', '#F2F5F8', '#F1F3F7', '#F3F5F8', 
  '#FEFEFE', '#FAFBFC', '#F6F8FA', '#1A9EAA', '#0F75C2',
  '#3598D0', '#1D89D4', '#0F7DD3', '#39ACB4'
];

const lightened = content.replace(/fill="(#[0-9A-F]{3,6})"/gi, (match, p1) => {
  const color = p1.toLowerCase();
  // If it's already light (starts with #f or #e) or is one of the brand blue/teals, keep it
  if (color.startsWith('#f') || color.startsWith('#e') || brands.some(b => b.toLowerCase() === color)) {
    return match;
  }
  // Otherwise, if it's dark (starts with #0, #1, #2, #3), turn it white
  if (/^#(0|1|2|3)/.test(color)) {
    return 'fill="#FFFFFF"';
  }
  return match;
});

fs.writeFileSync('public/logo-with-slogan-light.svg', lightened);
console.log('Generated public/logo-with-slogan-light.svg');
