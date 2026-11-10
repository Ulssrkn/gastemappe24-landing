const languageMenu = document.querySelector('.languages');

if (languageMenu) {
  document.addEventListener('pointerdown', (event) => {
    if (!languageMenu.contains(event.target)) languageMenu.open = false;
  });
  languageMenu.addEventListener('focusout', (event) => {
    if (!languageMenu.contains(event.relatedTarget)) languageMenu.open = false;
  });
  languageMenu.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !languageMenu.open) return;
    event.preventDefault();
    languageMenu.open = false;
    languageMenu.querySelector('summary').focus();
  });
}

const germanExamples = {
  wifi: {
    icon: 'wifi',
    title: 'WLAN im Haus',
    description: 'Das Gäste-WLAN steht Ihnen im gesamten Haus zur Verfügung.',
    label: 'NETZWERK',
    value: 'Haus Linde · Gäste'
  },
  arrival: {
    icon: 'key',
    title: 'An- & Abreise',
    description: 'Ihr Zimmer ist ab 15 Uhr für Sie bereit. Bitte geben Sie Ihren Schlüssel am Abreisetag bis 11 Uhr ab.',
    label: 'CHECK-IN / CHECK-OUT',
    value: 'Ab 15:00 Uhr / bis 11:00 Uhr'
  },
  tips: {
    icon: 'pin',
    title: 'Eine Runde zum See',
    description: 'Unser Tipp für den ersten Nachmittag. Der Uferweg beginnt gleich hinter dem Haus.',
    label: 'SPAZIERGANG',
    value: '2,4 km · ca. 35 Minuten'
  }
};

const translatedExamples = {
  en: {
    wifi: {
      title: 'Wi-Fi at the property',
      description: 'Guest Wi-Fi is available throughout the property.',
      label: 'NETWORK',
      value: 'Haus Linde · Guests'
    },
    arrival: {
      title: 'Arrival & departure',
      description: 'Your room is ready from 3 pm. Please return your key by 11 am on the day you leave.',
      label: 'CHECK-IN / CHECK-OUT',
      value: 'From 3 pm / by 11 am'
    },
    tips: {
      title: 'A walk to the lake',
      description: 'Our tip for your first afternoon. The lakeside path starts just behind the house.',
      label: 'WALK',
      value: '2.4 km · about 35 minutes'
    }
  },
  tr: {
    wifi: {
      title: 'Tesiste Wi-Fi',
      description: 'Misafir Wi-Fi ağı tesisin her yerinde kullanılabilir.',
      label: 'AĞ',
      value: 'Haus Linde · Misafirler'
    },
    arrival: {
      title: 'Varış ve ayrılış',
      description: 'Odanız saat 15.00’ten itibaren hazır. Ayrılış gününde lütfen anahtarınızı saat 11.00’e kadar teslim edin.',
      label: 'GİRİŞ / ÇIKIŞ',
      value: '15.00’ten itibaren / 11.00’e kadar'
    },
    tips: {
      title: 'Göle doğru bir yürüyüş',
      description: 'İlk öğleden sonranız için önerimiz. Göl kıyısındaki yürüyüş yolu tesisin hemen arkasında başlıyor.',
      label: 'YÜRÜYÜŞ',
      value: '2,4 km · yaklaşık 35 dakika'
    }
  }
};
const translations = translatedExamples[document.documentElement.lang];

const buttons = document.querySelectorAll('[data-example]');
const icon = document.querySelector('#example-icon');
const title = document.querySelector('#example-title');
const description = document.querySelector('#example-description');
const label = document.querySelector('#example-label');
const value = document.querySelector('#example-value');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.example;
    const original = germanExamples[key];
    const example = translations?.[key] ?? original;
    buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    icon.setAttribute('href', '#' + original.icon);
    title.textContent = example.title;
    description.textContent = example.description;
    label.textContent = example.label;
    value.textContent = example.value;
  });
});
