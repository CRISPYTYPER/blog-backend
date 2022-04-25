import Post from './models/post';

export default function createFakeData() {
    // 0, 1, ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
    const posts = [...Array(40).keys()].map((i) => ({
        title: `포스트 #${i}`,
        // https://www.lipsum.com/에서 복사한 200자 이상의 텍스트
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna mollis, semper mauris eu, dignissim libero. Donec at interdum ipsum, non gravida turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id imperdiet nibh. Praesent ipsum ex, ultricies at tortor quis, laoreet dignissim lorem. Vivamus porta est nec massa porttitor aliquam quis nec nulla. Fusce lacinia tincidunt tempus. Aliquam erat volutpat. Etiam dolor justo, vehicula eu ultrices eu, efficitur vitae diam. Aenean aliquam nunc urna, nec euismod augue accumsan semper. Proin at placerat sem, at dictum massa. Pellentesque ornare ultricies erat, et fermentum metus feugiat eget. Nunc vel vulputate nunc, sit amet sollicitudin odio. Suspendisse eu suscipit massa, a vehicula justo.',
        tags: ['가짜', '데이터'],
    }));

    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });
}
