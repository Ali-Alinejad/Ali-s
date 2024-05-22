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
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void progress_timer_Tick(object sender, EventArgs e)
        {

            progressBar.Value += 1;
            if ( progressBar.Value ==100)
            {
                progress_timer.Stop();
                
              mainpage frm = new mainpage();
              frm.Show();



              this.Hide();   
            }
           
            
           
        }

        private void label1_Click(object sender, EventArgs e)
        {

            
           
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            starting.BackColor = System.Drawing.Color.Transparent;
        }

        private void progressBar_Click(object sender, EventArgs e)
        {

        }

        private void starting_Click(object sender, EventArgs e)
        {

        }
    }
}
