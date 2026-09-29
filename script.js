const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  burger.setAttribute('aria-expanded', aberto);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('aberto');
    burger.setAttribute('aria-expanded', false);
  }
});

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const aviso = document.getElementById('aviso');
  const nome = f.nome.value.trim();
  const email = f.email.value.trim();
  if (!nome || !email || !f.email.checkValidity()) {
    aviso.hidden = false;
    return;
  }
  aviso.hidden = true;
  const texto =
    'Olá! Meu nome é ' + nome + '.\n' +
    'E-mail: ' + email + '\n' +
    (f.tel.value ? 'Telefone: ' + f.tel.value + '\n' : '') +
    'Serviço: ' + f.servico.value + '\n' +
    (f.msg.value ? 'Mensagem: ' + f.msg.value : '');
  window.open('https://wa.me/5588996681501?text=' + encodeURIComponent(texto), '_blank', 'noopener');
});
