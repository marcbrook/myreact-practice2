import React from 'react'
import {useForm} from "react-hook-form";
import './Userform.scss'
import Social from '../../widgets/Social/Social'



const Userform = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <section className="userform-wrapper">
            <section className="user-form-box">
                <div>
                  <p>预约演示</p>
                </div>
                <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
                    <label className="user-form-label">
                       <p className="form-title">姓名<span class="form-asterisk">*</span></p>
                       <input {...register("name", {required: true, maxLength: 4})} type="text" placeholder="请输入姓名" ></input>
                       {errors.name?.type == 'required' && <p className="form-vali">Your name is required</p>}
                       {errors.name?.type == 'maxLength' && <p className="form-vali">Your name must be less 4 character</p>}
                    </label>
                    <label className="user-form-label">
                       <p className="form-title">手机<span class="form-asterisk">*</span></p> 
                       <input {...register("phone", {required: true, maxLength: 11})} type="text" pattern="[0-9]*" placeholder="请输入手机号"></input>
                       {errors.phone?.type == 'required' && <p className="form-vali">Your phone number is required</p>}
                       {errors.phone?.type == 'maxLength' && <p className="form-vali">Your phone number must be less 4 character</p>}
                       {/*  */}
                    </label>
                    <label className="user-form-label">
                       <p className="form-title">验证码<span class="form-asterisk">*</span></p>
                       <div>
                          <input type="validation" placeholder="请输入验证码"></input>
                          <input type="submit" className="validate-code-btn" value="获取验证码" />
                       </div>
                    </label>
                    <label className="user-form-label">
                       <p className="form-title">公司名称</p>
                       <input type="text" placeholder="请输入公司名称"></input>
                    </label>
                    <label className="user-form-label">
                       <p className="form-title">公司职务</p>
                       <input type="text" placeholder="请输入所任职务"></input>
                    </label>
                    <label className="user-form-label">
                       <p className="form-title">备注</p>
                       <textarea type="text" placeholder="请输入备注内容"></textarea>
                    </label>
                    <input type="submit" className="sub-btn" value="提交" />
                </form>
            </section>
            <aside className="contact-box">
               <Social />
            </aside>
        </section>
    )
}

export default Userform