import { formProps } from "@/components/types";
import AuthenticationInput from "./authInput";
import FormButton from "./formBtn";
import AuthFrameHeader from "./boxHeader";


export default function AuthenticationForm({
  handleChange,
  handleSubmit,
  handleBlur,
  showPassword,
  userInfo,
  signUp,
  err,
  isUpdate,
  togglePasswordState,
}: formProps) {

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-[528px] rounded-xl gap-8 w-[323px] sm:py-8 py-5 px-5 sm:px-8 flex flex-col items-center bg-white"
    >
      <AuthFrameHeader/>
      <div className="w-full flex text-[#696868] flex-col gap-4">
        {signUp && (
          <AuthenticationInput
            placeholder="Jamisi Akpogbon"
            type="text"
            err={String(err?.name)}
            name="name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={String(userInfo?.name)}
            isUpdate={isUpdate}
          />
        )}

        <AuthenticationInput
          type="email"
          err={String(err.email)}
          name="email"
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="jamisiaphogbon@gmail.com"
          value={String(userInfo?.email)}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          isUpdate={isUpdate}
        />

        <AuthenticationInput
          err={String(err.password)}
          name="password"
          value={String(userInfo?.password)}
          handleBlur={handleBlur}
          handleChange={handleChange}
          togglePasswordState={togglePasswordState}
          showPassword={showPassword}
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          isUpdate={isUpdate}
        />

        {signUp && (
          <AuthenticationInput
            err={String(err.confirmPassword)}
            name="confirmPassword"
            value={String(userInfo?.confirmPassword)}
            handleBlur={handleBlur}
            handleChange={handleChange}
            togglePasswordState={togglePasswordState}
            showPassword={showPassword}
            type={showPassword ? 'text' : 'password'}
            placeholder="confirm your password"
            isUpdate={isUpdate}
          />
        )}

        {signUp && (
          <AuthenticationInput
            err={String(err.confirmPassword)}
            name="income"
            value={Number(userInfo?.income)}
            handleBlur={handleBlur}
            handleChange={handleChange}
            type='number'
            placeholder="Enter your expected monthly Income"
            isUpdate={isUpdate}
          />
        )}
      </div>
      <FormButton signUp={signUp} />
    </form>
  );
}