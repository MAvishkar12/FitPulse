import { Typography ,Stack,Button } from '@mui/material'
import BodyPartImage from "../assets/icons/body-part.png"
import TargetImage from "../assets/icons/target.png"
import EquipmentImage from  "../assets/icons/equipment.png"



function Describtion({execiseDetail}) {
    const {name,bodyPart,gifUrl,target,equipment}=execiseDetail;
    const extraDetail=[
      {
        icon:BodyPartImage,
        name:bodyPart

      },
      {
        icon:TargetImage,
        name:target
      },
      {
        icon:EquipmentImage,
        name:equipment
      }
    ]
    
  return (
    <Stack  gap="60px" sx={{flexDirection:{lg:'row'},padding:'20px',alignItems:"center"}}>
      <img src={gifUrl} alt={name} loading='lazey' className='detail-image'></img>
      <Stack sx={{gap:{lg:"35px",xs:"20px"}}}>
             <Typography variant='h3'>
              {name}
             </Typography>
             <Typography variant='h6'>
              Exercisees Keep you Strong.
            </Typography>
            {extraDetail.map((item,index)=>(
              <Stack key={index} direction="row" gap="26px"alignItems="center">
                      <Button sx={{background:"#ffff2db",borderRadius:"50%",width:"100px",height:"100px"}}>
                        <img src={item.icon}  alt={bodyPart} style={{width:"50px",height:"50px"}}></img>
                      </Button>
                      <Typography variant='h5' textTransform="capitalize">
                            {item.name}
                      </Typography>
                 
              </Stack>
            ))}
      </Stack>
    </Stack>
  )
}

export default Describtion