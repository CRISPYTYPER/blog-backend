import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
// checkLoggedIn 미들웨어는 로그인 상태가 아니라면 401 HTTP Status를 반환하고,
// 그렇지 않으면 그 다음 미들웨어들을 실행합니다.
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router(); // /api/posts/:id

post.get('/', postsCtrl.read);
// checkLoggedIn 미들웨어는 로그인 상태가 아니라면 401 HTTP Status를 반환하고,
// 그렇지 않으면 그 다음 미들웨어들을 실행합니다.
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;
