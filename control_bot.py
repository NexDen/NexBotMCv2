from tkinter import *
import rgb_to_hex
import os, threading


def send_message(guildId, channelId, message):
    os.system(f'node send_single_message.js  {guildId} {channelId} "{message}"') 


if __name__ == '__main__':
    p = Tk()
    p.geometry("800x600")

    p.config(bg="black")

    e1 = Entry(p, font=("Segoe UI", 32), bg="yellow")
    e1.place(x=50, y=100)

    e2 = Entry(p, font=("Segoe UI", 32), bg="yellow")
    e2.place(x=50, y=200)
    
    e3 = Entry(p, font=("Segoe UI", 32), bg="yellow")
    e3.place(x=50, y=300)
    
    b = Button(p, font=("Segoe UI", 32), text="Gönder",bg="yellow" ,command= lambda: send_message(e1.get(), e2.get(), e3.get()))
    b.place(x=50, y= 400)
    p.mainloop()