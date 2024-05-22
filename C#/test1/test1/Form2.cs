using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace test1
{
    public partial class mainpage : Form
    {
        int cont = 1;
        string space = ":";
        public mainpage()
        {
            InitializeComponent();
           

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_MouseHover(object sender, EventArgs e)
        {
            button1.BackColor = Color.LightGray;
        }

        private void button4_MouseHover(object sender, EventArgs e)
        {
            button4.BackColor = Color.LightGray;
        }

     

        private void button3_MouseHover(object sender, EventArgs e)
        {
            button3.BackColor = Color.LightGray;
        }

        private void button2_MouseHover(object sender, EventArgs e)
        {
            button2.BackColor = Color.LightGray;
        }

        private void button4_MouseLeave(object sender, EventArgs e)
        {
            button4.BackColor = Color.White;
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

            Environment.Exit(1);

        }

        private void mainpage_Load(object sender, EventArgs e)
        {


            label4.Text = DateTime.Now.DayOfWeek.ToString()+"-" + DateTime.Now.Day.ToString()+"-" + DateTime.Now.Month.ToString();
            logo.BackColor = Color.Transparent;
            pictureBox1.BackColor = Color.Transparent;
          
           
            
            button1.BackColor = Color.Transparent;
        }

        private void button4_Click(object sender, EventArgs e)
        {

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
           
            cont += 1;
            if (cont % 2 == 0) {

                space = " ";
                label1.Text = DateTime.Now.Hour.ToString() + space + DateTime.Now.Minute.ToString();
            }
            else
            {
                space = ":";
                label1.Text = DateTime.Now.Hour.ToString() + space + DateTime.Now.Minute.ToString();
            }
        }

        private void pictureBox1_MouseHover(object sender, EventArgs e)
        {
            pictureBox1.Image = ((System.Drawing.Image)(Properties.Resources.error));
        }

        private void pictureBox1_MouseLeave(object sender, EventArgs e)
        {
            pictureBox1.Image = ((System.Drawing.Image)(Properties.Resources.cancel));
        }

        private void button2_MouseLeave(object sender, EventArgs e)
        {
            button2.BackColor = Color.White;
        }

        private void button3_MouseLeave(object sender, EventArgs e)
        {
            button3.BackColor = Color.White;
        }

        private void button1_MouseLeave(object sender, EventArgs e)
        {
            button1.BackColor = Color.White;
        }

        private void label4_Click_1(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form3 f3 = new Form3();
            f3.Show();
            this.Hide();
        }
     

    }
}
