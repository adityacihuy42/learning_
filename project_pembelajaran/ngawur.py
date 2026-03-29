class WP:
    
    def __init__(self, nama_player: str, role: str, umur: int) -> None:
        self.name: str = nama_player
        self.role: str = role
        self.age: int = umur

    def Info_squad(self, nama_sq: str, tahun_berdiri: int, daerah: str) -> None:
        print(f"{nama_sq} adalah squad terkuat di Indonesia yang bahkan di gadang-gadang mampu menyaingi squad juara dunia saat ini (RORA).\nSquad ini di dirikan oleh {self.name} yang sekarang menjadi {self.role} di tim inti {nama_sq}.\n{nama_sq} di dirikan pada tahun {tahun_berdiri} di {daerah}")

    def pemain_inti(self) -> None:
        daftar: dict = {

            self.role : self.name,
            self.role : self.name,
            self.role : self.name,
            self.role : self.name,
            self.role : self.name   
        }
        print(f"DAFTAR PEMAIN INTI WP:\n{daftar}")
        
        return daftar
    
if __name__ == '__main__':
    pemain_1 = WP("pitak", "jungler", 18)
    pemain_1.Info_squad("WIDE PIGEONS", 1988, "GC3")
    pemain_1.pemain_inti()
