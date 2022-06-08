// import React, {
//   DetailedHTMLProps,
//   forwardRef,
//   InputHTMLAttributes,
//   useState,
// } from "react";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// import "./style.scss";
// import { IconButton } from "@mui/material";

// export type InputProps = {
//   label?: string;
//   extraClass?: string;
//   variant?: "condensed" | "free";
//   spaceY?: boolean;
//   bg?: string;
// } & Omit<
//   DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
//   "spaceY" | "bg" | "variant" | "extraClass"
// >;

// const InputField = forwardRef<HTMLInputElement, InputProps>(
//   (
//     {
//       label,
//       extraClass = "",
//       spaceY = true,
//       variant = "condensed",
//       bg = "white",
//       ...props
//     },
//     ref
//   ) => {
//     const [showPassword, setShowPassword] = useState(false);
//     return (
//       <div
//         className={`form-group  bg-${bg} ${!spaceY ? "" : variant === "free" ? "mt-10 mb-5" : "my-5"
//           }  ${extraClass}`}
//       >
//         {label && (
//           <label
//             className={`font-medium ${variant === "condensed" ? "-top-3" : "-top-6 -ml-4"
//               }  px-2 text-sm`}
//           >
//             {label}{" "}
//             {props.required ? <span className="text-error">*</span> : ""}
//           </label>
//         )}

//         <input
//           {...props}
//           ref={ref}
//           type={showPassword ? "text" : props.type}
//           className={`focus:outline-none placeholder-neutral bg-transparent w-full z-10 `}
//         />
//         {props.type == "password" && (
//           <IconButton
//             size="small"
//             sx={{ mr: "-0.7rem" }}
//             className="select-none"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? (
//               <VisibilityOutlinedIcon fontSize="small" />
//             ) : (
//               <VisibilityOffOutlinedIcon fontSize="small" />
//             )}
//           </IconButton>
//         )}
//       </div>
//     );
//   }
// );

// export default InputField;

class ClassA { }
class ClassB { }
function createClassInstance<T>
  (arg1: { new(): T }): T {
  return new arg1(); // error : see below
}
let classAInstance = createClassInstance(ClassA);

'roboto mono medium'