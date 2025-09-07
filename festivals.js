// त्योहारों और छवियों का डेटा
const festivals = {
    diwali: {
        image: 'diwali_laxmi.png', // आपको यह छवि प्रदान करनी होगी
        message: 'आपको और आपके परिवार को दिवाली की हार्दिक शुभकामनाएं! यह दिवाली आपके जीवन में सुख, शांति और समृद्धि लाए।'
    },
    // आप यहां अन्य त्योहार जोड़ सकते हैं
    // holi: {
    //     image: 'holi.png',
    //     message: 'होली के रंग आपकी जिंदगी में खुशियां भर दें!'
    // },
    // newyear: {
    //     image: 'newyear.png',
    //     message: 'नया साल मुबारक हो! यह साल आपके लिए नई उम्मीदें और सफलता लाए।'
    // }
};

let currentFestival = 'diwali'; // शुरुआत में दिवाली दिखाएं

document.addEventListener('DOMContentLoaded', () => {
    updateAppForFestival(currentFestival);
});

function updateAppForFestival(festivalKey) {
    const festivalData = festivals[festivalKey];
    if (festivalData) {
        document.getElementById('festival-image').src = festivalData.image;
        document.getElementById('festival-message').innerText = festivalData.message;
    }
}

function updateGreeting() {
    const userName = document.getElementById('userName').value;
    const greetingElement = document.getElementById('greeting');
    if (userName) {
        greetingElement.innerText = `नमस्ते, ${userName}!`;
    } else {
        greetingElement.innerText = `नमस्ते!`;
    }
}

function shareOnWhatsApp() {
    const userName = document.getElementById('userName').value;
    const festivalMessage = document.getElementById('festival-message').innerText;
    const appName = "RR - आपकी त्योहारों वाली ऐप";

    let shareText = `${festivalMessage}`;
    if (userName) {
        shareText += `\nआपके अपने, ${userName} की ओर से।`;
    }
    shareText += `\n\nइस शानदार ऐप को डाउनलोड करें: [आपकी ऐप का लिंक यहां]`; // आपको अपनी ऐप का लिंक डालना होगा

    // URL इनकोडिंग महत्वपूर्ण है
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank');
}

// भविष्य में त्योहार बदलने के लिए एक फ़ंक्शन
function changeFestival(newFestivalKey) {
    currentFestival = newFestivalKey;
    updateAppForFestival(newFestivalKey);
}

// उदाहरण: मान लें कि आप दिवाली के बाद होली दिखाना चाहते हैं (यह किसी तारीख के आधार पर हो सकता है)
// setTimeout(() => {
//     changeFestival('holi');
// }, 50000); // 50 सेकंड बाद होली दिखाएं (सिर्फ उदाहरण के लिए)

// यहां आप वास्तविक दुनिया में तारीखों के आधार पर त्योहारों को बदलेंगे।
// उदाहरण के लिए:
const today = new Date();
const month = today.getMonth() + 1; // महीना 0-11 से 1-12 होता है
const day = today.getDate();

if (month === 10 && day >= 20 && day <= 30) { // अक्टूबर के अंत में दिवाली मान लें
    changeFestival('diwali');
}
// else if (month === 3 && day >= 1 && day <= 10) { // मार्च की शुरुआत में होली मान लें
//     changeFestival('holi');
// }
// आप और 'else if' ब्लॉक जोड़ सकते हैं
