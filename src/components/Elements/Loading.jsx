import { motion } from "framer-motion"

export const Loading = () => {

  return (
    <div className="h-100 w-100 lodaing fixed top-0 right-0 bottom-0 left-0 bg-[#00214d] text-white flex justify-center items-center flex-col z-50">
      <h3 className="text-4xl font-[1.953em] leading-normal mt-11 mb-4 ">Please Wait</h3>
      <p className="mb-4 max-w-40em leading-[1.65]">Pending...</p>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          duration: 1
        }}
        style={{
          background: "#00ebc7",
          width: 100,
          height: 6,
          borderRadius: 5,
        }}
      />
      
       <motion.div
          initial={{ x: -150 }}
          animate={{
            x: 150,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
          }}
          style={{
            background: "orange",
            width: 50,
            height: 8,
            borderRadius: 5,
          }}
        />
        <motion.div
          style={{
            background: "yellow",
            width: 120,
            height: 10,
            borderRadius: 5,
          }}
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
          }}
        />

    </div>
  );


}