<template>
    <header style="text-align: center;font-family:'Times New Roman', Times, serif;"> 
        <h1>My Portofolio</h1>
        <figure>
            <img src="https://si.stechoq.com/user/pix.php/94/f1.jpg" style="border-radius : 25% ;"/>
        </figure>
        <p>Saya adalah Mahasiswa yang berdomisili Di Yogyakarta,
            saat ini sedang Studi Idependen Software Engginer Di PT. Stechoq Robotika Indonesia</p>
        <nav id="navigation" >
            <RouterLink :to="{ name:'home'}">Home</RouterLink>
            <RouterLink :to="{ name:'about'}">About</RouterLink>
            <RouterLink :to="{ name:'contact'}">Contact</RouterLink>
        </nav>
    </header>
</template>

<style lang="scss">
#navigation {
    display: flex;
    gap: 1rem;
    font-family:'Times New Roman', Times, serif;
    justify-content: center;
    background-color: rgba(31, 36, 59, 0.527);
    
}
</style>