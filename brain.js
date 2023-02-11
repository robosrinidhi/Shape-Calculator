const step1 = document.querySelector('#step-1');
const step2 = document.querySelector('#step-2');
const step3 = document.querySelector('#step-3');
const rectangle = document.querySelector('#rectangle');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const ellipse = document.querySelector('#ellipse');

step1.style.display = 'flex';
rectangle.style.display = 'none';
square.style.display = 'none';
circle.style.display = 'none';
ellipse.style.display = 'none';

let selectedShape = document.querySelector('input[name="shape"]:checked').value;
let result = 0;

const handleShapeChange = ()=>{
    selectedShape = document.querySelector('input[name="shape"]:checked').value;
    step1.style.display = 'none';
    document.querySelector('#step-2-shape').textContent = selectedShape;
    document.querySelector(`#${selectedShape}`).style.display = 'block';
    step2.style.display = 'flex';
};

const calculateArea = () => {
    const resString = 'The area is ';
    switch(selectedShape){
        case 'rectangle':
            const l = document.querySelector('input#length').value;
            const b = document.querySelector('input#breadth').value;
            result = (l*b).toFixed(2);
            document.querySelector('span#x').textContent = `length ${l}`;
            document.querySelector('span#y').textContent = `and breadth ${b}`;
            document.querySelector('#result').textContent = `${resString} ${result}`;
            break;
        
        case 'circle':
            const r = document.querySelector('input#radius').value;
            result = (Math.PI * r * r).toFixed(2);
            document.querySelector('#result').textContent = `${resString} ${result}`;
            break;
        case 'square':
            const s = document.querySelector('input#side').value;
            result = (s*s).toFixed(2);
            document.querySelector('span#x').textContent = `sides ${s}`;
            document.querySelector('#result').textContent = `${resString} ${result}`;
            break;
            case "ellipse":
                const minor = document.querySelector("input#minor-axis").value;
                const major = document.querySelector("input#major-axis").value;
                result = (Math.PI * minor * major).toFixed(2);
                document.querySelector("span#x").textContent = `minor-Axis ${minor}`;
                document.querySelector("span#y").textContent = ` and major-Axis ${major}`;
                document.querySelector("#result").textContent = `${resString} ${result}`;
                break;
    }
    document.querySelector("#step-3-shape").textContent = selectedShape;
    step2.style.display = "none";
    step3.style.display = "flex";
}