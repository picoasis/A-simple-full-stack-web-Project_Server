'use strict';
const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;

class UtilController extends Controller {
  async captcha() {
    const { ctx } = this;
    const captcha = svgCaptcha.create({
        size:4,
        fontsize:50,
        width:100,
        height:40,
        noise:3
    });
    //存放在session中，用于做校验，下次登入时使用
    //随时情况销毁，不会对session有太大压力
    console.log('captach-text=> ',captcha.text);
    ctx.session.captcha = captcha.text;
    ctx.response.type = "image/svg+xml";
    ctx.body = captcha.data;
  }
}

module.exports = UtilController;
