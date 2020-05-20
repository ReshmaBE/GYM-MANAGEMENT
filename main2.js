package com.example.gymmanagement;
import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
public class Main2Activity extends AppCompatActivity {
   TextView name,trainer,trainer1,slot;
   Integer[] park_spot = new Integer[10];
Button btngetData;
   @Override
   protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       setContentView(R.layout.activity_main2);
       name=(TextView) findViewById(R.id.textView5);
       trainer=(TextView) findViewById(R.id.textView7);
       trainer1=(TextView) findViewById(R.id.textView10);
       slot=(TextView)findViewById(R.id.textView3);
       btngetData = (Button) findViewById(R.id.button_view);
       Bundle bundle=getIntent().getExtras();
       String value1=bundle.getString("value1");
       String value3=bundle.getString("value3");
       trainer.setText(value3);
       name.setText(value1);
   }

   public void  slot(View view) {
       final String namee = name.getText().toString();
       final String train = trainer.getText().toString();
       Intent intent2 = new Intent(this, Main3dActivity.class);
       intent2.putExtra("value3", namee);
       intent2.putExtra("value4", train);
       startActivity(intent2);
   }

   public void  trainer(View view){
       final String Vehicle = name.getText().toString();
       Intent intent=new Intent(this,Main3cActivity.class);
       intent.putExtra("value3", Vehicle);
       startActivity(intent);
   }

   public void logout(View view) {
       Intent intent=new Intent(this,MainActivity.class);
       startActivity(intent);
       Toast.makeText(Main2Activity.this, "Successfully logged out", Toast.LENGTH_LONG).show();
   }

   public void view(View view) {
       Bundle bundle=getIntent().getExtras();
       String value2=bundle.getString("value2");
       String value5 = bundle.getString("value5");
       trainer1.setText(value5);
       slot.setText(value2);
   }
}
