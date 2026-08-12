/* ==========================================================================
   border — site copy, English + Spanish
   Keys match `data-i18n` / `data-i18n-html` attributes in index.html.
   `-html` keys may contain markup (only <br> is used).

   Source of truth for the FAQ and the product description is the support
   page at nebu-labs.com/border — keep them in step.
   ========================================================================== */

window.BORDER_COPY = {

  en: {
    'nav.modes':   'Modes',
    'nav.privacy': 'Privacy',
    'nav.faq':     'FAQ',
    'nav.cta':     'Get the app',

    /* ── Pinned rail ───────────────────────────────────────────────────── */

    'hero.title': "How's the<br />line?",
    'hero.body':  'A community-powered app to quickly and easily share and find where to get in line, current wait times, and other useful US/Mexico border-crossing information.',
    'hero.cta':   'Get the app',

    'p1.title': 'Not just how long.<br />Where.',
    'p1.body':  'See the current wait time, hours of operation, and the estimated or shared starting point of the line on the map — then get directions straight to it.',
    'p1.cta':   'How it works',

    'p2.title': 'Both ways<br />across.',
    'p2.body':  'Northbound waits come from official CBP data blended with live community reports. Southbound, where no official feed exists, they come from traffic conditions combined with submissions from the people crossing.',

    'p3.title': 'You join the line.<br />Everyone finds out.',
    'p3.body':  "Tap “I'm in line here” when you join, then swipe to confirm. Your wait instantly updates the line's status for everyone else — and theirs updates yours.",
    'p3.cta':   'Start sharing',

    'p4.title': 'No account<br />needed to start.',
    'p4.body':  "Use it as a guest for as long as you like. Creating an account adds automatic sign-in and keeps a record of your submissions — worth it whenever you're ready.",
    'p4.cta':   'Try it free',

    /* ── Modes ─────────────────────────────────────────────────────────── */

    'modes.title': 'However<br />you cross.',
    'modes.lede':  'Navigate through the available ports, lanes and crossing methods. Each mode has its own lanes, hours and waits.',
    'modes.m1':    'Passenger vehicles',
    'modes.m2':    'Pedestrian',
    'modes.m3':    'Commercial',

    /* ── Privacy ───────────────────────────────────────────────────────── */

    'priv.title': 'Your location stays yours.',
    'priv.lede':  'Knowing where a line starts is only useful if sharing it never costs you your privacy. border asks for the least it can, and puts every choice in your hands.',
    'priv.c1':    'You choose the moment',
    'priv.c1t':   'By default your location is read at exactly two points you decide on — when you start your timer, and when you end it.',
    'priv.c2':    'Automatic, only if you ask',
    'priv.c2t':   "You can allow background location so the app ends your timer on its own once you've crossed. Entirely optional, and off until you turn it on.",
    'priv.c3':    'Both sides, both languages',
    'priv.c3t':   'Fully translated in English and Spanish, switchable whenever you like.',

    /* ── FAQ (mirrors nebu-labs.com/border) ────────────────────────────── */

    'faq.title': 'Frequently asked questions',

    'faq.q1': 'How can I check the status of a border crossing line?',
    'faq.a1': "Open the app and find the line's latest information by navigating through the available ports, lanes, and crossing methods. You'll be able to see the current wait time, hours of operation, the estimated or shared starting point of the line on the map, and when the information was last updated.",

    'faq.q2': 'How do I submit an update to a line status?',
    'faq.a2': "First, make sure you're not driving and it's safe to use the app. When you join a line, open the app and find its corresponding card. Confirm you're viewing the correct port, line type, and crossing method. Tap “I'm in line here,” adjust details if needed, then swipe right to confirm your submission. This instantly updates the line's status for others.",

    'faq.q3': 'How do I find directions to where a line starts?',
    'faq.a3': 'Tap the blue-tinted transparent circle on the map. This will allow you to choose your preferred navigation app and receive directions to that location.',

    'faq.q4': 'Do I need an account?',
    'faq.a4': 'No, you can use the app as a guest.',

    'faq.q5': 'What are the benefits of creating an account?',
    'faq.a5': 'Creating an account allows automatic sign-in and lets you keep a record of your submissions. This feature will be expanded in a future release.',

    'faq.q6': 'I need to delete my account. How can I do it?',
    'faq.a6': 'Follow the delete account steps →',

    /* ── Download + footer ─────────────────────────────────────────────── */

    'dl.title': 'Check the line<br />before you go.',
    'dl.lede':  'Free on iPhone and Android, in English and Spanish.',

    'store.apple1':  'Download on the',
    'store.google1': 'Get it on',

    'footer.tag':     "How's the line?",
    'footer.app':     'App',
    'footer.support': 'Support',
    'footer.legal-h': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.delete':  'Delete account',
    'footer.legal':   'border is not affiliated with, endorsed by, or representing any government agency. Wait times combine official CBP data with community submissions and are a guide, not a guarantee.',
    'footer.rights':  'All rights reserved.'
  },

  es: {
    'nav.modes':   'Modos',
    'nav.privacy': 'Privacidad',
    'nav.faq':     'Preguntas',
    'nav.cta':     'Descarga la app',

    /* ── Pinned rail ───────────────────────────────────────────────────── */

    'hero.title': '¿Cómo está<br />la fila?',
    'hero.body':  'Una app impulsada por la comunidad para compartir y consultar fácilmente dónde formarte, los tiempos de espera actuales y otra información útil sobre cruces fronterizos entre México y Estados Unidos.',
    'hero.cta':   'Descarga la app',

    'p1.title': 'No solo cuánto.<br />Dónde.',
    'p1.body':  'Consulta el tiempo de espera actual, el horario y el punto donde empieza la fila en el mapa — estimado o compartido — y obtén indicaciones para llegar ahí.',
    'p1.cta':   'Cómo funciona',

    'p2.title': 'En ambos<br />sentidos.',
    'p2.body':  'Las esperas hacia el norte vienen de datos oficiales de CBP combinados con reportes de la comunidad. Hacia el sur, donde no existe un servicio oficial, vienen del tráfico en vivo junto con los reportes de quienes van cruzando.',

    'p3.title': 'Tú te formas.<br />Todos se enteran.',
    'p3.body':  'Toca “Estoy formado aquí” al llegar y desliza para confirmar. Tu espera actualiza al instante el estado de la fila para los demás — y la de ellos actualiza la tuya.',
    'p3.cta':   'Empieza a compartir',

    'p4.title': 'Sin cuenta<br />para empezar.',
    'p4.body':  'Úsala como invitado el tiempo que quieras. Crear una cuenta añade el inicio de sesión automático y guarda el registro de tus reportes — cuando tú quieras.',
    'p4.cta':   'Pruébala gratis',

    /* ── Modes ─────────────────────────────────────────────────────────── */

    'modes.title': 'Como sea<br />que cruces.',
    'modes.lede':  'Navega entre las garitas, carriles y modos de cruce disponibles. Cada modo tiene sus propios carriles, horarios y esperas.',
    'modes.m1':    'Vehículos particulares',
    'modes.m2':    'Peatonal',
    'modes.m3':    'Comercial',

    /* ── Privacy ───────────────────────────────────────────────────────── */

    'priv.title': 'Tu ubicación es tuya.',
    'priv.lede':  'Saber dónde empieza una fila solo sirve si compartirlo nunca te cuesta tu privacidad. border pide lo mínimo posible y deja cada decisión en tus manos.',
    'priv.c1':    'Tú eliges el momento',
    'priv.c1t':   'Por defecto tu ubicación se registra en exactamente dos momentos que tú decides — cuando inicias el tiempo y cuando lo detienes.',
    'priv.c2':    'Automático, solo si lo pides',
    'priv.c2t':   'Puedes permitir la ubicación en segundo plano para que la app detenga el tiempo por ti al cruzar. Es totalmente opcional y está desactivado hasta que tú lo actives.',
    'priv.c3':    'Ambos lados, ambos idiomas',
    'priv.c3t':   'Totalmente traducida al español y al inglés, puedes cambiar cuando quieras.',

    /* ── FAQ ───────────────────────────────────────────────────────────── */

    'faq.title': 'Preguntas frecuentes',

    'faq.q1': '¿Cómo puedo consultar el estado de una fila?',
    'faq.a1': 'Abre la app y encuentra la información más reciente de la fila navegando entre las garitas, carriles y modos de cruce disponibles. Podrás ver el tiempo de espera actual, el horario, el punto estimado o compartido donde empieza la fila en el mapa, y cuándo se actualizó la información por última vez.',

    'faq.q2': '¿Cómo envío una actualización del estado de una fila?',
    'faq.a2': 'Primero, asegúrate de no estar manejando y de que sea seguro usar la app. Cuando te formes, abre la app y busca la tarjeta correspondiente. Confirma que estás viendo la garita, el tipo de fila y el modo de cruce correctos. Toca “Estoy formado aquí”, ajusta los detalles si hace falta y desliza a la derecha para confirmar tu reporte. Esto actualiza el estado de la fila al instante para los demás.',

    'faq.q3': '¿Cómo obtengo indicaciones hacia donde empieza la fila?',
    'faq.a3': 'Toca el círculo transparente azul en el mapa. Esto te permitirá elegir tu app de navegación preferida y recibir indicaciones hacia esa ubicación.',

    'faq.q4': '¿Necesito una cuenta?',
    'faq.a4': 'No, puedes usar la app como invitado.',

    'faq.q5': '¿Qué beneficios tiene crear una cuenta?',
    'faq.a5': 'Crear una cuenta permite el inicio de sesión automático y te deja guardar un registro de tus reportes. Esta función se ampliará en una versión futura.',

    'faq.q6': 'Necesito eliminar mi cuenta. ¿Cómo lo hago?',
    'faq.a6': 'Sigue los pasos para eliminar tu cuenta →',

    /* ── Download + footer ─────────────────────────────────────────────── */

    'dl.title': 'Revisa la fila<br />antes de salir.',
    'dl.lede':  'Gratis en iPhone y Android, en español e inglés.',

    'store.apple1':  'Descárgala en el',
    'store.google1': 'Disponible en',

    'footer.tag':     '¿Cómo está la fila?',
    'footer.app':     'App',
    'footer.support': 'Soporte',
    'footer.legal-h': 'Legal',
    'footer.privacy': 'Aviso de privacidad',
    'footer.delete':  'Eliminar cuenta',
    'footer.legal':   'border no está afiliada, respaldada ni representa a ninguna entidad gubernamental. Los tiempos de espera combinan datos oficiales de CBP con reportes de la comunidad y son una guía, no una garantía.',
    'footer.rights':  'Todos los derechos reservados.'
  }
};
