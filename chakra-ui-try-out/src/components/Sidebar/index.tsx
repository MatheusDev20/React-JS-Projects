import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine } from "react-icons/ri"

export const Sidebar = () => {
  return (
    <Box as='aside' w='64' mr='8' px='6'>
      <Stack spacing='12' align='flex - start'>
        <Box>
          <Text fontWeight='bold' fontSize='sm' color='gray.400'>GERAL</Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' alignItems='center' _hover={{ color: 'pink.400' }}>
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Dashboard</Text>
            </Link>

            <Link display='flex' alignItems='center ' _hover={{ color: 'pink.400' }}>
              <Icon as={RiContactsLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Usuários</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight='bold' fontSize='sm' color='gray.400'>AUTOMACÃO</Text>
          <Stack spacing='4' mt='8' align='stretch'>
            <Link display='flex' alignItems='center' _hover={{ color: 'pink.400' }}>
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Formulários</Text>
            </Link>

            <Link display='flex' alignItems='center'>
              <Icon as={RiContactsLine} fontSize='20' _hover={{ color: 'pink.400' }} />
              <Text ml='4' fontWeight='medium'>Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack >
    </Box >
  )
}