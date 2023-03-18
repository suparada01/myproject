# Welcome Fitness Club

![1](https://user-images.githubusercontent.com/110576987/226110877-cc5e033b-74a3-41a1-9507-6ba2f9f82853.jpg)
สมาชิกในกลุ่ม

1. 6310110016 นายกฤษกร ปิดดำ 

2. 6310110487 นางสาวศุภรดา นนทศรี 


เว็บแอพพลิเคชั่นการออกกำลังกาย  มีการใช้งาน RapidAPI , Nodejs การดึงข้อมูล API หมวดหมู่การออกกำลังกายและกลุ่มกล้ามเนื้อเฉพาะ ท่าในการออกกำลังกายแต่ละกลุ่ม รายละเอียดการออกกำลังกาย และมีการดึงวิดีโอที่เกี่ยวข้องจาก youtube
# Home

หน้า Home มีในส่วนของ Exercises , SecarhExercises

ในส่วนของ Exercises เป็นการแสดงท่าออกกำลังกายที่ดึงข้อมูลมา ใช้คำสั่ง await fetchData ในการดึงข้อมูล เพื่อนำมาแสดงหมวดหมู่ ท่าออกกำลังกาย
![3](https://user-images.githubusercontent.com/110576987/226110901-dcfe8bf8-4522-4ef8-8fcc-2bd5e5debd03.jpg)
![7](https://user-images.githubusercontent.com/110576987/226110940-bfd2fdc4-ac89-45f6-8d00-90c0414b22f6.jpg)
```javascript  
useEffect(() => {
const  fetchExercisesData = async () => {
let  exercisesData = [];

if (bodyPart === 'all') {
exercisesData = await  fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
} else {
exercisesData = await  fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
}
setExercises(exercisesData);
};

fetchExercisesData();
}, [bodyPart]);
```
ในส่วนของ SecarhExercises เป็นการให้ค้นหาท่าออกกำลังกาย จะใช้ API ที่ฟังก์ชันในการค้นหา
![2](https://user-images.githubusercontent.com/110576987/226110893-b30957ee-7724-4878-8d6a-fa784a85b991.jpg)
```javascript 
const  SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
const [search, setSearch] = useState('');
const [bodyParts, setBodyParts] = useState([]);
useEffect(() => { .....
}, []);

const  handleSearch = async () => {
if (search) {
const  exercisesData = await  fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);  
const  searchedExercises = exercisesData.filter(

(item) =>  item.name.toLowerCase().includes(search)

|| item.target.toLowerCase().includes(search)

|| item.equipment.toLowerCase().includes(search)

|| item.bodyPart.toLowerCase().includes(search),

);
setSearch('');
setExercises(searchedExercises);
}
};
```

## หน้า Detail Exercises

เป็นการแสดงรายละเอียดของท่าออกกำลังกายแต่ละท่า แสดงรูปท่าออกกำลังกาย  วิดีโอท่าออกกำลังกาย
![4](https://user-images.githubusercontent.com/110576987/226110908-83f1e62f-35a6-400d-aeba-edbb2710ef5c.jpg)
```javascript 
useEffect(() => {

window.scrollTo({ top:  0, behavior:  'smooth' });
const  fetchExercisesData = async () => {
const  exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
const  youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
const  exerciseDetailData = await  fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

setExerciseDetail(exerciseDetailData);

const  exerciseVideosData = await  fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);

setExerciseVideos(exerciseVideosData.contents);

const  targetMuscleExercisesData = await  fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);

setTargetMuscleExercises(targetMuscleExercisesData);

const  equimentExercisesData = await  fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
setEquipmentExercises(equimentExercisesData);

};

fetchExercisesData();

}, [id]);
```

## Viedo Exercises
![5](https://user-images.githubusercontent.com/110576987/226110919-c2d32ded-00f8-4c3b-bd04-b77a67b34e47.jpg)
แสดง exercise videos ที่เกี่ยวข้องกับท่าออกกำลังกาย จากกำหนดตัวแปรท่าออกกำลังกาย
```javascript
href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
```

## env

เราสามารถกำหนดค่าของ ตัวแปรต่างๆที่จำเป็นสำหรับใช้ใน project ร่วมกันได้ ทำให้ง่ายต่อการจัดการมากยิ่งขึ้น และยังมีความสำคัญเกี่ยวกับเรื่องความปลอดภัยด้วย
![8](https://user-images.githubusercontent.com/110576987/226110955-0bf0c086-4302-43bf-9789-302e27d106fb.jpg)

