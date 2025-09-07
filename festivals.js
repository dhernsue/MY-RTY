// त्योहारों और उनकी जानकारी
const festivals = {
    diwali: {
        image: 'diwali_laxmi.png',
        message: 'आपको और आपके परिवार को दिवाली की हार्दिक शुभकामनाएं! यह दिवाली आपके जीवन में सुख, शांति और समृद्धि लाए।',
        startDate: { month: 10, day: 20 },
        endDate: { month: 10, day: 30 }
    },
    holi: {
        image: 'holi.png',
        message: 'होली के रंग आपकी जिंदगी में खुशियां भर दें!',
        startDate: { month: 3, day: 1 },
        endDate: { month: 3, day: 10 }
    },
    newyear: {
        image: 'newyear.png',
        message: 'नया साल मुबारक हो! यह साल आपके लिए नई उम्मीदें और सफलता लाए।',
        startDate: { month: 1, day: 1 },
        endDate: { month: 1, day: 1 }
    }
};

let currentFestival = 'diwali'; // डिफ़ॉल्ट त्योहार

// DOM लोड होने पर एप अपडेट करें
document.addEventListener('DOMContentLoaded', () => {
    currentFestival = getTodayFestival() || currentFestival;
    updateAppForFestival(currentFestival);
});

// आज के दिन का त्योहार चुनें
function getTodayFestival() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    for (const key in festivals) {
        const fest = festivals[key];
        const start = fest.startDate;
        const end = fest.endDate;

        if ((month > start.month || (month === start.month && day >= start.day)) &&
            (month < end.month || (month === end.month && day <= end.day))) {
            return key;
        }
    }
    return null; // कोई मैच नहीं
}

// एप्लिकेशन अपडेट करने के लिए फ़ंक्शन
function updateAppForFestival(festivalKey) {
    const festivalData = festivals[festivalKey];
    const festivalImage = document.getElementById('festival-image');
    const festivalMessage = document.getElementById('festival-message');

    if (festivalData) {
        festivalImage.src = festivalData.image || 'default.png'; // fallback image
        festivalMessage.innerText = festivalData.message || '';
    } else {
        festivalImage.src = 'default.png';
        festivalMessage.innerText = 'शुभ त्योहार!';
    }
}

// यूज़र का ग्रीटिंग अपडेट करें
function updateGreeting() {
    const userName = document.getElementById('userName').value.trim();
    const greetingElement = document.getElementById('greeting');
    greetingElement.innerText = userName ? `नमस्ते, ${userName}!` : `नमस्ते!`;
}

// व्हाट्सऐप पर शेयर करने के लिए फ़ंक्शन
function shareOnWhatsApp() {
    const userName = document.getElementById('userName').value.trim();
    const festivalMessage = document.getElementById('festival-message').innerText;
    const appLink = "[आपकी ऐप का लिंक यहाँ]";

    let shareText = `${festivalMessage}`;
    if (userName) shareText += `\nआपके अपने, ${userName} की ओर से।`;
    shareText += `\n\nइस शानदार ऐप को डाउनलोड करें: ${appLink}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
}

// त्योहार बदलने का फ़ंक्शन (manual)
function changeFestival(newFestivalKey) {
    if (festivals[newFestivalKey]) {
        currentFestival = newFestivalKey;
        updateAppForFestival(newFestivalKey);
    } else {
        console.warn("यह त्योहार उपलब्ध नहीं है:", newFestivalKey);
    }
}
