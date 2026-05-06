// Nội dung 2 đoạn văn em muốn hiển thị
const content1 = "Mọi nỗ lực của em trong thời gian qua đều rất đáng trân trọng. Dù hôm nay có chút mệt mỏi hay đầy ắp niềm vui, hãy cứ nhẹ nhàng đón nhận nó nhé.";
const content2 = "Tụi mình xứng đáng có những phút giây tĩnh lặng để lắng nghe bản thân. Chúc em một buổi tối thật bình yên và những giấc mơ thật đẹp!";

let i = 0;
let j = 0;
const speed = 50; // Tốc độ đánh máy (mili giây/ký tự) - số càng nhỏ chữ hiện càng nhanh

function showMessage() {
    // Hiện khung chứa và ẩn nút bấm sau khi nhấn
    document.getElementById('hidden-message').style.display = 'block';
    document.querySelector('button').style.display = 'none';
    
    // Bắt đầu đánh máy đoạn 1
    typeWriter1();
}

function typeWriter1() {
    if (i < content1.length) {
        document.getElementById("text-paragraph-1").innerHTML += content1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    } else {
        // Sau khi đoạn 1 xong, đợi một chút rồi đánh máy đoạn 2
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
