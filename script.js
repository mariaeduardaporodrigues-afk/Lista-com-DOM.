const form=document.querySelector('#courseForm');
const titleInput=document.querySelector('#title'), descInput=document.querySelector('#description'), imageInput=document.querySelector('#image');
const list=document.querySelector('#courseList'), count=document.querySelector('#count'), clearBtn=document.querySelector('#clearBtn');
let courses=[];
const defaultCourses=[
{title:'Desenvolvimento Web',description:'Aprenda a criar páginas e aplicações para a internet usando HTML, CSS e JavaScript.',image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80'},
{title:'Design Digital',description:'Explore cores, composição e criatividade para desenvolver interfaces visuais.',image:'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=500&q=80'},
{title:'Programação',description:'Conheça a lógica de programação e construa soluções com código.',image:'https://images.unsplash.com/photo-151587 받고?auto=format&fit=crop&w=500&q=80'}
];
// Substitui URL inválida de exemplo por uma imagem segura
defaultCourses[2].image='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80';
courses=[...defaultCourses];
function render(){
 count.textContent=courses.length;
 if(!courses.length){list.innerHTML='<div class="empty"><span>♡</span><h3>Sua lista está esperando!</h3><p>Adicione o primeiro curso usando o formulário acima.</p></div>';return;}
 list.innerHTML='';
 courses.forEach((course,index)=>{
 const card=document.createElement('article');card.className='course';
 const img=document.createElement('img');img.src=course.image||'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80';img.alt='Imagem de '+course.title;img.onerror=()=>{img.style.display='none'};
 const content=document.createElement('div');content.className='course-content';
 const top=document.createElement('div');top.className='course-top';
 const heading=document.createElement('div');heading.innerHTML=`<div class="number">CURSO ${String(index+1).padStart(2,'0')}</div>`;
 const h=document.createElement('h3');h.textContent=course.title;heading.appendChild(h);
 const remove=document.createElement('button');remove.className='remove';remove.textContent='Remover ×';remove.setAttribute('aria-label','Remover '+course.title);remove.onclick=()=>{courses.splice(index,1);render()};
 top.append(heading,remove);const p=document.createElement('p');p.textContent=course.description;content.append(top,p);card.append(img,content);list.appendChild(card);
 });
}
form.addEventListener('submit',event=>{event.preventDefault();courses.unshift({title:titleInput.value.trim(),description:descInput.value.trim(),image:imageInput.value.trim()});form.reset();render();titleInput.focus()});
clearBtn.addEventListener('click',()=>{if(courses.length&&confirm('Deseja apagar todos os cursos da lista?')){courses=[];render()}});
render();