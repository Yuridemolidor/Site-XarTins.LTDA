// ============================================
// ANIMAÇÃO DE SCROLL
// ============================================

const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

elements.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add("show");

}

});

});

// ============================================
// SEGURANÇA - EVITAR CÓPIA E INSPEÇÃO
// ============================================

// 1. Bloquear cópia de código
document.addEventListener("copy", (e) => {
  e.preventDefault();
  alert("Conteúdo protegido! Para usar nossos serviços, entre em contato conosco.");
  return false;
});

// 2. Bloquear clique direito
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  return false;
});

// 3. Bloquear atalhos de teclado para inspecionar
document.addEventListener("keydown", (e) => {
  // F12 (DevTools)
  if(e.key === "F12") {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+I ou Cmd+Option+I (Inspecionar)
  if((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === "I" || e.key === "i")) {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+C ou Cmd+Option+C (Inspecionar elemento)
  if((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === "C" || e.key === "c")) {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+J ou Cmd+Option+J (Console)
  if((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === "J" || e.key === "j")) {
    e.preventDefault();
    return false;
  }
});

// 4. Detectar DevTools aberto
let devToolsOpen = false;
const detectDevTools = setInterval(() => {
  const threshold = 160;
  if(window.outerHeight - window.innerHeight > threshold || 
     window.outerWidth - window.innerWidth > threshold) {
    if(!devToolsOpen) {
      devToolsOpen = true;
      console.clear();
      document.body.innerHTML = '<div style="display:flex; justify-content:center; align-items:center; height:100vh; color:white; text-align:center; background:#050914;"><div><h1>⚠️ Acesso Bloqueado</h1><p>Ferramentas de desenvolvedor detectadas!</p><p>Este site está protegido contra cópias não autorizadas.</p><p>Para informações legais, fale conosco.</p></div></div>';
      clearInterval(detectDevTools);
    }
  }
}, 1000);

// 5. Desabilitar drag nas imagens
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("dragstart", (e) => {
    e.preventDefault();
    return false;
  });
});

// 6. Proteger contra ferramentas externas
if(navigator.webdriver) {
  document.body.innerHTML = '<p style="color:red; padding:20px;">Acesso automatizado detectado. Acesso negado.</p>';
}