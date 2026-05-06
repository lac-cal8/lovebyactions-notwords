const content1 = "Mọi nỗ lực của em trong thời gian qua đều rất đáng trân trọng. Dù hôm nay có chút mệt mỏi hay đầy ắp niềm vui, hãy cứ nhẹ nhàng đón nhận nó nhé.";
const content2 = "Tụi mình xứng đáng có những phút giây tĩnh lặng để lắng nghe bản thân. Chúc em một buổi tối thật bình yên và những giấc mơ thật đẹp!";

let i = 0;
let j = 0;
const speed = 50;

// Hàm xử lý khi bấm nút 1
function showNextButton() {
    document.getElementById('btn1').style.display = 'none'; // Ẩn nút 1
    document.getElementById('btn2').style.display = 'inline-block'; // Hiện nút 2
}

// Hàm xử lý khi bấm nút 2
function startTyping() {
    document.getElementById('btn2').style.display = 'none'; // Ẩn nút 2
    document.getElementById('hidden-message').style.display = 'block'; // Hiện khung văn bản
    typeWriter1(); // Bắt đầu hiệu ứng đánh máy
}

function typeWriter1() {
    if (i < content1.length) {
        document.getElementById("text-paragraph-1").innerHTML += content1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    } else {
        setTimeout(typeWriter2, 500);
    }
}

function typeWriter2() {
    if (j < content2.length) {
        document.getElementById("text-paragraph-2").innerHTML += content2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
}
