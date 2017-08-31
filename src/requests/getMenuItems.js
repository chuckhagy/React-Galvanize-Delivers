export default function getMenuItems(){
  console.log('hey yoo')
  return fetch('data/menu-items.json').then(response => response.json)
}
