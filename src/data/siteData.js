import heroBackground from "../assets/hero-background.jpg";
import heroTitle from "../assets/hero-title-cutout.png";
import logoMark from "../assets/logo-mark.png";
import storySchool from "../assets/story-school.jpg";
import storyAlley from "../assets/story-alley.jpg";
import chapterNight from "../assets/chapter-night.jpg";
import chapterSchool from "../assets/chapter-school.jpg";
import chapterAlley from "../assets/chapter-alley.jpg";
import chapterRoom from "../assets/chapter-room.jpg";
import gallerySchool from "../assets/gallery-school-wide.jpg";
import galleryAlley from "../assets/gallery-alley.jpg";
import galleryClassroom from "../assets/gallery-classroom.jpg";
import galleryOffice from "../assets/gallery-office.jpg";
import galleryField from "../assets/gallery-field.jpg";
import galleryRoad from "../assets/gallery-road.jpg";
import galleryGhost from "../assets/gallery-ghost.jpg";
import entityGhost from "../assets/entity-ghost.jpg";
import entityTest from "../assets/characters/entity-test.png";
import tposeMale from "../assets/characters/tpose-male.png";
import workshopNpcRoom from "../assets/characters/workshop-npc-room.png";
import tposeFemale from "../assets/characters/tpose-female.png";
import teacherClassroom from "../assets/characters/teacher-classroom.png";
import minhSchoolyard from "../assets/characters/minh-schoolyard.png";
import workshopNpcTest from "../assets/characters/workshop-npc-test.png";
import aoDaiCharacter from "../assets/characters/ao-dai-character.png";
import securityGuard from "../assets/characters/security-guard.png";
import maleStudentWorkshop from "../assets/characters/male-student-workshop.png";
import workshopNpcMuscle from "../assets/characters/workshop-npc-muscle.png";
import motherRelative from "../assets/characters/mother-relative.png";

export const links = {
  roblox:
    "https://www.roblox.com/share?code=c3c316eed5414d4c9810ebe570df8dd1&type=ExperienceDetails&stamp=1782985419037",
  tiktok: "https://www.tiktok.com/@tuiladaxus",
  facebook: "https://www.facebook.com/people/The-Fading-Light/61590674345995/"
};

export const assets = {
  heroBackground,
  heroTitle,
  logoMark,
  storySchool,
  storyAlley,
  entityGhost
};

export const navLinks = [
  { id: "home", label: "Trang chủ" },
  { id: "story", label: "Giới thiệu" },
  { id: "progress", label: "Tiến độ" },
  { id: "gallery", label: "Hình ảnh" },
  { id: "characters", label: "Nhân vật" },
  { id: "updates", label: "Cập nhật" }
];

export const developmentStatus = [
  {
    id: "current",
    icon: "gamepad",
    title: "Bản hiện tại",
    description: "Demo Roblox đang phát triển"
  },
  {
    id: "focus",
    icon: "hammer",
    title: "Tập trung hiện tại",
    description: "Hoàn thiện map, nhân vật, nhiệm vụ và trải nghiệm kinh dị"
  },
  {
    id: "changes",
    icon: "refresh",
    title: "Nội dung có thể thay đổi",
    description:
      "Cốt truyện, chương, nhân vật và giao diện sẽ được cập nhật theo thời gian"
  },
  {
    id: "follow",
    icon: "broadcast",
    title: "Theo dõi tiến độ",
    description: "Hình ảnh và video phát triển sẽ được đăng trên TikTok và Facebook"
  }
];

export const chapters = [
  {
    id: "area-school",
    icon: "book",
    image: chapterSchool,
    kicker: "Khu vực 1 —",
    title: "Sân trường",
    tag: "Đang hoàn thiện",
    description:
      "Không gian trường học là một trong những khu vực chính đang được hoàn thiện.",
    details:
      "Khu vực này dùng để thử nghiệm nhịp khám phá, ánh sáng, âm thanh môi trường và cảm giác lạc lõng trong một nơi tưởng như quen thuộc."
  },
  {
    id: "area-alley",
    icon: "building",
    image: chapterAlley,
    kicker: "Khu vực 2 —",
    title: "Hẻm phố",
    tag: "Bối cảnh thử nghiệm",
    description:
      "Những con hẻm cũ mang cảm giác quen thuộc, nhưng luôn có điều gì đó sai lệch.",
    details:
      "Bản dựng hiện tại tập trung vào bố cục lối đi, nhịp xuất hiện của chi tiết lạ và các điểm dẫn người chơi qua không gian tối."
  },
  {
    id: "area-classroom",
    icon: "moon",
    image: chapterNight,
    kicker: "Khu vực 3 —",
    title: "Phòng học",
    tag: "Đang tinh chỉnh",
    description:
      "Một nơi tưởng như an toàn, nhưng lại chứa nhiều ký ức bị bỏ quên.",
    details:
      "Thiết kế phòng học có thể thay đổi khi nhiệm vụ, câu chuyện và nhịp hù dọa được cân bằng lại trong các bản cập nhật sau."
  },
  {
    id: "area-workshop",
    icon: "wrench",
    image: chapterRoom,
    kicker: "Khu vực 4 —",
    title: "Xưởng / phòng bỏ hoang",
    tag: "Phân đoạn căng thẳng",
    description:
      "Khu vực tối hơn, nặng không khí hơn, dùng cho các phân đoạn căng thẳng.",
    details:
      "Đây là vùng thử nghiệm không khí, âm thanh và cách người chơi bị ép phải quan sát kỹ hơn thay vì chỉ chạy qua màn chơi."
  }
];

export const gallery = [
  {
    title: "Sân trường cũ",
    tag: "Map",
    image: gallerySchool,
    span: "md:col-span-2 lg:col-span-3",
    height: "h-44 sm:h-52 lg:h-44"
  },
  {
    title: "Hẻm phố ký ức",
    tag: "Môi trường",
    image: galleryAlley,
    span: "md:col-span-2 lg:col-span-2",
    height: "h-44 sm:h-52 lg:h-44"
  },
  {
    title: "Lớp học vắng",
    tag: "Demo",
    image: galleryClassroom,
    span: "md:col-span-4 lg:col-span-3",
    height: "h-44 sm:h-52 lg:h-44"
  },
  {
    title: "Xưởng bỏ hoang",
    tag: "Thử nghiệm",
    image: galleryOffice,
    span: "md:col-span-2 lg:col-span-2",
    height: "h-48"
  },
  {
    title: "Cánh đồng sương",
    tag: "Môi trường",
    image: galleryField,
    span: "md:col-span-2 lg:col-span-2",
    height: "h-48"
  },
  {
    title: "Đường làng yên ắng",
    tag: "Map",
    image: galleryRoad,
    span: "md:col-span-2 lg:col-span-2",
    height: "h-48"
  },
  {
    title: "Bóng đỏ",
    tag: "Nhân vật",
    image: galleryGhost,
    span: "md:col-span-2 lg:col-span-2",
    height: "h-48"
  },
  {
    title: "Sân trường trong bản dựng",
    tag: "Demo",
    image: storySchool,
    span: "md:col-span-2 lg:col-span-4",
    height: "h-48"
  },
  {
    title: "Con hẻm đang hoàn thiện",
    tag: "Môi trường",
    image: storyAlley,
    span: "md:col-span-2 lg:col-span-4",
    height: "h-48"
  }
];

export const characters = [
  {
    id: "mother-relative",
    name: "Mẹ / người thân",
    tag: "Đang hoàn thiện",
    image: motherRelative,
    description:
      "Nhân vật gắn với tuyến cảm xúc gia đình và ký ức của Minh. Vai trò chi tiết có thể tiếp tục được điều chỉnh trong quá trình phát triển."
  },
  {
    id: "minh",
    name: "Minh",
    tag: "Nhân vật chính",
    image: minhSchoolyard,
    description:
      "Nhân vật trung tâm của dự án. Vai trò và nội dung chi tiết có thể tiếp tục được điều chỉnh trong quá trình phát triển."
  },
  {
    id: "khanh-an",
    name: "Khánh An",
    tag: "Đang hoàn thiện",
    image: tposeFemale,
    description:
      "Nhân vật gắn với tuyến cảm xúc gia đình và bối cảnh học đường. Thiết kế hiện tại đang được dùng để kiểm tra model."
  },
  {
    id: "security-guard",
    name: "Bảo vệ",
    tag: "NPC",
    image: securityGuard,
    description:
      "NPC xuất hiện trong khu vực trường học, dùng để thử nghiệm nhịp tương tác và bối cảnh đời thường trước khi không khí chuyển sang bất an."
  },
  {
    id: "teacher",
    name: "Giáo viên",
    tag: "NPC",
    image: teacherClassroom,
    description:
      "Nhân vật hỗ trợ các phân đoạn học đường và minigame lớp học. Hành vi, animation và vai trò có thể tiếp tục được tinh chỉnh."
  },
  {
    id: "female-student",
    name: "Học sinh nữ",
    tag: "NPC",
    image: aoDaiCharacter,
    description:
      "NPC dùng để hoàn thiện không khí trường học, sân trường và bối cảnh đời thường trong bản demo."
  },
  {
    id: "male-student",
    name: "Học sinh nam",
    tag: "NPC",
    image: maleStudentWorkshop,
    description:
      "Model học sinh nam đang được kiểm tra trong các bối cảnh khác nhau. Một số chi tiết tạo hình có thể thay đổi."
  },
  {
    id: "ao-dai-character",
    name: "Nhân vật áo dài",
    tag: "Đang hoàn thiện",
    image: aoDaiCharacter,
    description:
      "Một nhân vật trong bối cảnh học đường Việt Nam, hiện dùng để kiểm tra trang phục, tỷ lệ model và cách nhân vật xuất hiện trong map."
  },
  {
    id: "workshop-npc",
    name: "NPC xưởng / thử nghiệm",
    tag: "Mẫu thử",
    image: workshopNpcRoom,
    description:
      "NPC đang được thử trong khu vực xưởng và phòng làm việc. Ảnh thể hiện giai đoạn kiểm tra bố cục, ánh sáng và vị trí nhân vật."
  },
  {
    id: "workshop-npc-2",
    name: "NPC thử nghiệm",
    tag: "Mẫu thử",
    image: workshopNpcTest,
    description:
      "Model thử nghiệm cho các phân đoạn căng thẳng hơn. Thiết kế và vai trò chưa phải phiên bản cuối cùng."
  },
  {
    id: "entity",
    name: "Thực thể",
    tag: "Thử nghiệm",
    image: entityTest,
    description:
      "Hình bóng bí ẩn xuất hiện trong những phân đoạn kinh dị. Thiết kế hiện tại là mẫu thử để kiểm tra không khí và cảm giác đe dọa."
  },
  {
    id: "tpose-female",
    name: "Mẫu T-pose nữ",
    tag: "Mẫu thử",
    image: tposeFemale,
    description:
      "Ảnh dùng trong quá trình phát triển và kiểm tra model nhân vật nữ trước khi đưa vào animation hoặc phân cảnh cụ thể."
  },
  {
    id: "tpose-male",
    name: "Mẫu T-pose nam",
    tag: "Mẫu thử",
    image: tposeMale,
    description:
      "Ảnh dùng trong quá trình phát triển và kiểm tra model nhân vật nam, tỷ lệ cơ thể, chất liệu và trang phục."
  },
  {
    id: "workshop-heavy",
    name: "NPC xưởng",
    tag: "NPC thử nghiệm",
    image: workshopNpcMuscle,
    description:
      "Một biến thể NPC dùng trong khu vực xưởng/phòng bỏ hoang, hiện phục vụ kiểm tra ánh sáng, vị trí và độ rõ của nhân vật."
  }
];

export const devlog = [
  {
    phase: "Giai đoạn 1",
    title: "Ổn định trải nghiệm mở đầu",
    summary:
      "Đội phát triển đã tập trung cải thiện phần mở đầu của game để người chơi hiểu rõ hơn về bối cảnh trước khi bước vào ác mộng đầu tiên.",
    pointsTitle: "Các thay đổi chính",
    points: [
      "Thêm phần cảnh báo nội dung trước khi bắt đầu game.",
      "Thêm thông báo game đang trong giai đoạn phát triển.",
      "Xây dựng phần giới thiệu cốt truyện dạng chữ trên nền đen.",
      "Tối ưu font chữ tiếng Việt để tránh lỗi dấu.",
      "Loại bỏ hệ thống ảnh minh họa trong intro để tránh lỗi hiển thị.",
      "Thêm hiệu ứng chữ chạy theo phong cách kể chuyện.",
      "Intro có thể tự động chuyển cảnh hoặc bỏ qua bằng nút Skip."
    ],
    closing:
      "Phần mở đầu hiện tại giúp người chơi hiểu rằng game không chỉ là kinh dị, mà còn xoay quanh áp lực học tập, gia đình, trách nhiệm và nỗi sợ thất bại của nhân vật chính."
  },
  {
    phase: "Giai đoạn 2",
    title: "Cải thiện âm thanh và chuyển cảnh intro",
    summary:
      "Phần âm thanh trong intro được xử lý lại để tạo cảm giác điện ảnh hơn nhưng vẫn đảm bảo không ảnh hưởng đến các phân đoạn sau.",
    pointsTitle: "Các thay đổi chính",
    points: [
      "Thêm nhạc nền riêng cho phần cảnh báo và giới thiệu.",
      "Âm thanh intro sẽ tự động dừng khi bước vào NightmareIntro.",
      "Sửa lỗi âm thanh có thể bị sót lại sau khi bỏ qua intro.",
      "Đảm bảo sound không xung đột với nhạc nền hoặc âm thanh sự kiện khác."
    ],
    closing:
      "Mục tiêu của giai đoạn này là tạo cảm giác nghiêm túc, chậm rãi và có chiều sâu trước khi người chơi bước vào phần ác mộng."
  },
  {
    phase: "Giai đoạn 3",
    title: "Sửa lỗi con trỏ chuột trong UI",
    summary:
      "Một số đoạn giao diện cần người chơi tương tác nhưng con trỏ chuột lại bị ẩn. Vì vậy hệ thống cursor đã được xử lý lại.",
    pointsTitle: "Các thay đổi chính",
    points: [
      "Khi vào phần cảnh báo/intro, chuột sẽ luôn được thả tự do.",
      "Người chơi luôn nhìn thấy con trỏ chuột.",
      "Thêm cơ chế dự phòng nếu con trỏ mặc định của Roblox bị ẩn.",
      "Nút Skip trong intro có thể bấm rõ ràng hơn.",
      "Sau khi intro kết thúc, cursor được bàn giao lại cho gameplay bình thường."
    ],
    closing:
      "Điều này giúp phần giao diện đầu game dễ sử dụng hơn, đặc biệt trong lúc test hoặc khi chơi trên các thiết bị khác nhau."
  },
  {
    phase: "Giai đoạn 4",
    title: "Ổn định camera và cảm giác điều khiển",
    summary:
      "Camera là một trong những phần được chỉnh nhiều nhất để giảm cảm giác khó chịu khi chơi.",
    pointsTitle: "Các thay đổi chính",
    points: [
      "Loại bỏ hệ thống camera custom gây chóng mặt.",
      "Quay về camera mặc định của Roblox.",
      "Không còn camera bob, breathing hoặc ép góc nhìn không cần thiết.",
      "Giảm lỗi camera bị giật, khóa hoặc xoay khó chịu.",
      "Giữ nguyên camera cutscene ở các đoạn cần thiết."
    ],
    closing:
      "Mục tiêu là để người chơi có cảm giác điều khiển tự nhiên hơn, đồng thời vẫn giữ được các đoạn cinematic quan trọng của game."
  },
  {
    phase: "Giai đoạn 5",
    title: "Cải thiện giao diện nhiệm vụ và hướng dẫn",
    summary:
      "Một số giao diện hướng dẫn trước đây có thể xuất hiện sai thời điểm hoặc che mất nội dung quan trọng. Hệ thống này đã được điều chỉnh lại.",
    pointsTitle: "Các thay đổi chính",
    points: [
      "Hướng dẫn chỉ xuất hiện đúng ngữ cảnh.",
      "Không còn che dialogue, task UI hoặc đoạn cutscene quan trọng.",
      "Nhiệm vụ hiển thị rõ ràng hơn.",
      "Các UI quan trọng được ưu tiên hiển thị đúng lớp.",
      "Giảm tình trạng người chơi bị rối vì nhiều UI cùng lúc."
    ],
    closing: "Điều này giúp game dễ hiểu hơn, nhất là với người chơi mới."
  },
  {
    phase: "Giai đoạn 6",
    title: "Ổn định hệ thống ác mộng và thực thể truy đuổi",
    summary:
      "Phần ác mộng được xử lý để rõ vai trò của từng thực thể và tránh xung đột logic.",
    pointsTitle: "Các thay đổi chính",
    points: [
      "Tách rõ vai trò của KeBiAn và KeBiAnTruyDuoi.",
      "KeBiAn chỉ dùng cho cảnh hù dọa cũ.",
      "KeBiAnTruyDuoi là thực thể chính trong phân đoạn truy đuổi.",
      "Sửa lỗi script cũ yêu cầu Humanoid gây lỗi đỏ trong Output.",
      "Giữ nguyên logic truy đuổi, bắt người chơi và jumpscare.",
      "Âm thanh jumpscare chỉ phát đúng lúc bị bắt."
    ],
    closing:
      "Nhờ vậy, phân đoạn kinh dị hoạt động ổn định hơn và ít bị lỗi ngoài ý muốn."
  },
  {
    phase: "Giai đoạn 7",
    title: "Cải thiện Chapter 2 và các đoạn chuyển cảnh",
    summary:
      "Một số đoạn ở Chapter 2, đặc biệt là sau các cảnh ác mộng hoặc tai nạn, được kiểm tra và gia cố thêm.",
    pointsTitle: "Các thay đổi chính",
    points: [
      "Tăng độ ổn định sau các đoạn cutscene.",
      "Giảm lỗi bị đứng game sau khi chuyển cảnh.",
      "Bổ sung kiểm tra để chapter tiếp tục đúng flow.",
      "Bảo toàn hệ thống wake-up, task và dialogue.",
      "Không làm ảnh hưởng đến Chapter 1 hoặc các phần khác."
    ],
    closing:
      "Giai đoạn này tập trung vào việc tránh kẹt flow khi người chơi đi qua các đoạn sự kiện quan trọng."
  },
  {
    phase: "Giai đoạn 8",
    title: "Phát triển minigame bài kiểm tra ở School Map",
    summary:
      "Phần minigame bài kiểm tra đang được mở rộng để có nhiều tương tác hơn thay vì chỉ chọn đáp án đơn giản.",
    pointsTitle: "Các nội dung đang được phát triển",
    points: [
      "Sửa lỗi không thấy chuột khi làm bài kiểm tra.",
      "Thêm hướng dẫn ngắn trước khi bắt đầu minigame.",
      "Sửa task từ “Giúp Bình An vào lớp” thành nhiệm vụ làm bài kiểm tra.",
      "Thêm cơ chế thầy giáo quay lưng / quay lại.",
      "Khi thầy quay lưng, người chơi có thể hành động mạo hiểm hơn.",
      "Khi thầy quay lại, người chơi phải dừng tương tác.",
      "Tăng nhẹ độ nghi ngờ của thầy để minigame căng thẳng hơn."
    ],
    closing:
      "Phần này sẽ khiến minigame có cảm giác giống một tình huống trong lớp học thật hơn: vừa làm bài, vừa để ý thầy, vừa xử lý những tình huống bất ngờ."
  },
  {
    phase: "Giai đoạn 9",
    title: "Hệ thống Linh và Bình An trong bài kiểm tra",
    summary:
      "Hai nhân vật Linh và Bình An sẽ có vai trò rõ hơn trong minigame bài kiểm tra.",
    pointsTitle: "Các nội dung đang được phát triển",
    points: [
      "Người chơi có thể nhìn xung quanh để tìm Linh.",
      "Khi nhìn thấy Linh, có thể nhấn F để hỏi bài.",
      "Linh sẽ có animation thở nhẹ.",
      "Khi trò chuyện, Linh sẽ quay đầu/neck về phía người chơi.",
      "Bình An sẽ thì thầm nhờ giúp bài.",
      "Nếu người chơi không trả lời Bình An, Bình An sẽ tiếp tục gọi và làm tăng nghi ngờ của thầy.",
      "Người chơi phải chọn đúng đáp án A/B/C/D để giúp Bình An."
    ],
    closing:
      "Hệ thống này giúp phần bài kiểm tra có nhiều áp lực hơn, vì người chơi phải cân bằng giữa việc làm bài, hỏi bài, giúp bạn và tránh bị thầy phát hiện."
  },
  {
    phase: "Giai đoạn 10",
    title: "Cutscene sau bài kiểm tra",
    summary:
      "Sau khi hoàn thành bài kiểm tra, game sẽ có một đoạn cutscene ngắn để kết thúc tình huống trong lớp.",
    pointsTitle: "Nội dung dự kiến",
    points: [
      "Thầy giáo thông báo hết giờ làm bài.",
      "Màn hình chuyển đen để tóm tắt thời gian sau buổi học.",
      "Thầy nhận xét kết quả của cả lớp.",
      "Linh được khen vì làm bài tốt.",
      "Bình An tưởng mình đã “pass” vì chép theo Linh.",
      "Sau đó thầy phát hiện một số bạn chép bài nhưng khác mã đề.",
      "Tình huống được xử lý theo hướng hài nhẹ, đúng không khí học đường Việt Nam."
    ],
    closing:
      "Đây là đoạn giúp minigame có kết thúc rõ ràng hơn, đồng thời tạo điểm nhấn vui nhưng vẫn phù hợp với bối cảnh học đường."
  },
  {
    phase: "Giai đoạn 11",
    title: "Kiểm tra model và animation nhân vật",
    summary:
      "Một số model nhân vật được rà soát lại để tránh lỗi xuất hiện sai thời điểm.",
    pointsTitle: "Các model được chú ý",
    points: ["BinhAn", "BinhAnNup", "BinhAnNgoi", "Linh", "ThayGiao", "ThayGiaoQuayLung"],
    goalsTitle: "Mục tiêu",
    goals: [
      "Không để nhân vật bị ẩn sai lúc.",
      "Không hiện trùng nhiều model cùng lúc.",
      "Đảm bảo Bình An có đúng model trong từng phân đoạn.",
      "Thêm animation thở nhẹ cho NPC.",
      "Thêm chuyển động cổ/đầu khi nhân vật chú ý đến người chơi."
    ]
  }
];

export const devlogSummary = {
  title: "Tổng kết tình trạng hiện tại",
  points: [
    "Cốt truyện nghiêm túc hơn.",
    "UI dễ hiểu hơn.",
    "Camera ổn định hơn.",
    "Âm thanh được kiểm soát kỹ hơn.",
    "Minigame có nhiều tương tác hơn.",
    "Nhân vật phụ có vai trò rõ hơn.",
    "Các đoạn cutscene được làm mạch lạc hơn."
  ],
  closing:
    "Dự án vẫn đang trong quá trình hoàn thiện nên có thể còn phát sinh lỗi trong quá trình test. Đội phát triển sẽ tiếp tục sửa lỗi, tối ưu gameplay và hoàn thiện trải nghiệm trong các bản cập nhật tiếp theo."
};
